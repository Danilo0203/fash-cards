import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const session = await getSession({ req });
  if (!session) {
    return NextResponse.redirect("/auth/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
