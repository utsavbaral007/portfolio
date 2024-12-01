import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.posts.findMany();
    return NextResponse.json({
      status: 200,
      data: posts,
    });
  } catch (e) {
    return NextResponse.json({
      status: 400,
      error: e.message,
    });
  }
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
