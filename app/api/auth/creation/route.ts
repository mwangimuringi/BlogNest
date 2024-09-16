import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      return NextResponse.json({ error: "User authentication failed" }, { status: 401 });
    }

    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    return NextResponse.redirect(new URL('/dashboard/', request.url));
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
