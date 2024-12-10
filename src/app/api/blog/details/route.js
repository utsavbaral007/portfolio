import posts from "@/app/model/posts";
import { dbConnect } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  try {
    const data = await posts
      .findOne({
        slug: body.slug,
      })
      .maxTimeMS(8000);
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
