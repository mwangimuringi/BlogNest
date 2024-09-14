import { RenderArticle } from "@/app/components/dashboard/RenderArticle";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JSONContent } from "novel";

export async function getData(slug: string) {
  const data = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
    select: {
      articleContent: true,
      title: true,
      smallDescription: true,
      image: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function BlogPostPage({
  params,
}: {
  params: {
    slug: string;
    name: string;
  };
}) {
  const data = await getData(params.slug);
  return (
    <>
      <div className="flex items-center gap-x-3 pt-10 pb-5">
        <Button size="icon" variant="outline" asChild>
          <Link href={`/blog/${params.name}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Go Back</h1>
      </div>

      <div className="flex flex-col items-center justify-center mb-10">
        <div className="m-auto w-full text-center md:w-7/12">
          <p className="m-auto my-5 w-10/12 text-sm font-light text-muted-foreground md:text-base">
            16 apr 2024
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            {data.title}
          </h1>
          <p className="w-10/12 text-muted-foreground line-clamp-3 m-auto">
            {data.smallDescription}
          </p>
        </div>
      </div>
      <div className="relative mb-10 m-auto h-80 w-full max-w-screen-lg overflow-hidden md:mb-20 md:h-[450px] md:rounded-2xl lg:w-2/3">
        <Image
          src={data.image}
          alt={data.title}
          className="object-cover h-full w-full"
          width={1200}
          height={630}
          priority 
        />
      </div>

      <RenderArticle json={data.articleContent as JSONContent} />  
    </>
  );
}
