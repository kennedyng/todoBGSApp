import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    //middleware
  },
  {
    callbacks: {
      authorized: ({ token }) => (token ? true : false),
    },
  }
);

export const config = { matcher: ["/"] };
