import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const posts = await prisma.posts.findMany();
    return NextResponse.json({
      status: 200,
      data: posts,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 400,
      error: e.message,
    });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  await prisma.posts.create({
    data: {
      imgUrl: body.imgUrl,
      title: body.title,
      description: body.description,
      author: session.user.name,
      category: body.category,
      slug: body.title
        .toLocaleLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .split(" ")
        .join("-"),
    },
  });
  return NextResponse.json({
    status: 200,
    message: "Post created successfully",
  });
}
