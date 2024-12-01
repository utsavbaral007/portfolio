import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Hello world",
  });
}

export async function POST(req) {
  const body = await req.json();
  await prisma.posts.create({
    data: {
      imgUrl: body.imgUrl,
      title: body.title,
      description: body.description,
      user: "Utsav Baral",
      category: body.category,
    },
  });
  return NextResponse.json({
    status: 200,
    message: "Post created successfully",
  });
}
