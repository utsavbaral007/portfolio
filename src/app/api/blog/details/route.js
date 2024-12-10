import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  try {
    const posts = await prisma.posts.findUnique({
      where: {
        slug: body.slug,
      },
    });
    return NextResponse.json({
      status: 200,
      data: [posts],
    });
  } catch (e) {
    return NextResponse.json({
      status: 400,
      error: e.message,
    });
  }
}
