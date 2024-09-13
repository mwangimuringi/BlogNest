import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { EmptyState } from "../components/dashboard/EmptyState";
import prisma from "../utils/db";
import { requireUser } from "../utils/requireUser";
import Defaultimage from "@/public/default.png";
import { Button } from "@/components/ui/button";

async function getData() {
  //query sites and articles using prisma Promise.all
  const [sites, articles] = await Promise.all([
    prisma.site.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
    prisma.post.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
  ]);

  return {
    sites,
    articles,
  };
}
export default async function DashboardIndexPage() {
  const user = await requireUser();
  const data = await getData();
  const { sites, articles } = await getData(user.id);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Your Sites</h1>
      {sites.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {sites.map((item) => (
            <Card key={item.id}>
              <Image
                src={item.imageUrl ?? Defaultimage}
                alt={item.name}
                className="rounded-t-lg object-cover w-full h-[200px]"
                width={400}
                height={200}
              />
              <CardHeader>
                <CardTitle className="truncate">{item.name}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${item.id}`}>
                    View Articles
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You dont have any Sites created"
          description="You currently dont have any Sites. Please create some so that you can
        see them right here!"
          buttonText="Create Site"
          href="/dashboard/sites/new"
        />
      )}
      <h1 className="text-2xl font-semibold mt-10">Recent articles</h1>
      {articles.length > 0 ? (
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
         {articles.map((item) => (
           <Card key={item.id}>
             <Image
               src={item.image ?? Defaultimage}
               alt={item.title}
               className="rounded-t-lg object-cover w-full h-[200px]"
               width={400}
               height={200}
             />
             <CardHeader>
               <CardTitle className="truncate">{item.title}</CardTitle>
               <CardDescription className="line-clamp-3">
                 {item.smallDescription}
               </CardDescription>
             </CardHeader>

             <CardFooter>
               <Button asChild className="w-full">
                 <Link href={`/dashboard/sites/${item.siteId}`}>
                   Edit Articles
                 </Link>
               </Button>
             </CardFooter>
           </Card>
         ))}
       </div>
      ) : (
        <EmptyState
          title="You dont have any Articles completed"
          description="You currently dont have any Articles. Please create some so that you can
        see them right here!"
          buttonText="Create Article"
          href="/dashboard/sites/new"
        />
      )}
    </div>
  );
}
