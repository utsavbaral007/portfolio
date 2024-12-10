import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import users from "@/app/model/users";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
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
    console.log(error.message);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
