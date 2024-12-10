import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const hashPassword = await hash(body.password, 10);
    const newUser = await prisma.users.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: hashPassword,
      },
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
