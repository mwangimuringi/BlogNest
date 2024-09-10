// import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FileIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Defaultimage from "@/public/default.png";

export default async function SitesRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className="mr-2 size-4" /> Create Site
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex size-20 items-center justify-center rounded-full">
          <FileIcon className="size-10 text-primary" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          You dont have any sites created
        </h2>
        <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm mx-auto">
          You dont have any Sites. Please create some so that you can see them
          here!
        </p>

        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className="mr-2 size-4" /> Create Site
          </Link>
        </Button>
      </div>
    </>
  );
}
