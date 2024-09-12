import { DeletePost } from "@/app/actions";
import { UploadImageForm } from "@/app/components/dashboard/forms/UploadImageForm";
import { SubmitButton } from "@/app/components/dashboard/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, Delete } from "lucide-react";
import Link from "next/link";

export default function SettingsRoute({
  params,
}: {
  params: { siteId: string };
}) {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Button size="icon" variant="outline" asChild>
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ChevronLeft className="size-4" />
          </Link>
        </Button>
        <h3 className="text-xl font-semibold">Go back</h3>
      </div>

      <UploadImageForm siteId={params.siteId} />

      <Card className="border-red-500 bg-red-500/10">
        <CardHeader>
          <CardTitle className="text-red-500">Danger</CardTitle>
          <CardDescription>
            This will delete the site and all its data.
          </CardDescription>
        </CardHeader>
        <CardFooter >
          {/* action or post request and not get request */}
          <form action={DeletePost}> 
          <input type = "hidden" name = "siteId" value = {params.siteId} />
          <SubmitButton variant="destructive" text="Delete Everything" />
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
