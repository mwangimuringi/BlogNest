import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export default withAuth({
    loginPage: "api/auth/login",
    isReturnToCurrentPage: true,
});

export const config = {
    matcher: ["/dashboard/:path*"]
}