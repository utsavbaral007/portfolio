import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import users from "@/app/model/users";
import { dbConnect } from "@/lib/mongodb";

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const existingUser = await users.findOne({ email: body.email });

    if (existingUser) {
      return NextResponse.json({
        status: 400,
        message: `Sorry, user with email ${body.email} already exists`,
      });
    }

    const hashPassword = await hash(body.password, 10);
    const newUser = await users.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashPassword,
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json({
      status: 201,
      user: rest,
      message: "User created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
