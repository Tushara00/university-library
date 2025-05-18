// middleware.ts
import { auth } from "@/auth"; // ✅ Only import, don't re-export
import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/sign-in", "/sign-up",, "/too-fast"];

export async function middleware(request: NextRequest) {
  const session = await auth();

  const pathname = request.nextUrl.pathname;
  const isPublic = publicPaths.includes(pathname);

  if (!session && !isPublic) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icons|api/auth|imageKIt).*)"],
};
