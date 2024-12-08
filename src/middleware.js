import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/blog", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/create", "/blog/create/:path*"],
};
