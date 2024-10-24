import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect("/auth/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
