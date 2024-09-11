import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, siteId: string) {
  const data = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
    select: {
      subdirectory: true,
      posts: {
        select: {
          image: true,
          title: true,
          createdAt: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return data;
}
export default async function SiteIdRoute({
  params,
}: {
  params: { siteId: string };
}) {
  //getting data in frontend -userId and siteId
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }
  const data = await getData(user.id, params.siteId);
  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant="secondary">
          <Link href={`/dashboard/sites/${params.siteId}/create`}>
            <Book className="size-4 mr-2" />
            View Blog
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="#">
            <Settings className="size-4 mr-2" />
            Settings
          </Link>
        </Button>

        <Button asChild>
          <Link href="#">
            <PlusCircle className="size-4 mr-2" />
            Create Article
          </Link>
        </Button>
      </div>

     {data?.posts === undefined || data.posts.length === 0 ? (
        <EmptyState
        title="You dont have any Articles created"
        description="You currently dont have any articles. please create some so that you can see them right here"
        buttonText="Create Article"
        href={`/dashboard/sites/${params.siteId}/create`}
      />
      ): (
        <h1>here is data</h1>
      )}
    </>
  );
}
