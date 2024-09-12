import { DeletePost } from "@/app/actions";
import { SubmitButton } from "@/app/components/dashboard/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteForm({
  params,
}: {
  params: { siteId: string; articleId: string };
}) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Are you sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. Please confirm that you want to delete
            this article.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between w-full">
          <Button variant="secondary" asChild>
            <Link href={`/dashboard/sites/${params.siteId}`}>Cancel</Link>
          </Button>
          <Button variant="destructive">Delete</Button>
          <form action={DeletePost}>
            <input type="hidden" name="articleId" value={params.articleId} />
            <input type="hidden" name="siteId" value={params.siteId} />{" "}
            <SubmitButton variant="destructive" text="Delete" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
