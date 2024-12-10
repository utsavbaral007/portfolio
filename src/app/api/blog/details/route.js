import posts from "@/app/model/posts";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  try {
    const data = await posts.findOne({
      slug: body.slug,
    });
    return NextResponse.json({
      status: 200,
      data: [data],
    });
  } catch (e) {
    return NextResponse.json({
      status: 400,
      error: e.message,
    });
  }
}
