import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(); // We should put any route that need to be unprotected inside the parenthesis e.g publicRoute: ["/test"]

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
