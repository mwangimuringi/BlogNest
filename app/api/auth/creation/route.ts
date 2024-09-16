import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  console.log('User:', user); // Log user details

  if (!user || user === null || !user.id) {
    console.error('Error: User authentication failed');
    return NextResponse.json({ error: "User authentication failed" }, { status: 401 });
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  console.log('Database User:', dbUser); // Log user from DB

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

    console.log('Created User:', dbUser); // Log created user
  }

  return NextResponse.redirect("http://localhost:3000/dashboard/");
}
