import { Label } from "@radix-ui/react-dropdown-menu";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
    return(
        <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your Site here. Click the button below once your done...
          </CardDescription>
        </CardHeader>
        {/* <form id={form.id} onSubmit={form.onSubmit} action={action}> */}
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="grid gap-2">
                <Label>Site Name</Label>
                {/* <Input
                  name={fields.name.name}
                  key={fields.name.key}
                  defaultValue={fields.name.initialValue}
                  placeholder="Site Name"
                />
                <p className="text-red-500 text-sm">{fields.name.errors}</p> */}
              </div>

              <div className="grid gap-2">
                <Label>Subdirectory</Label>
                {/* <Input
                  name={fields.subdirectory.name}
                  key={fields.subdirectory.key}
                  defaultValue={fields.subdirectory.initialValue}
                  placeholder="Subdirectory"
                /> */}
                {/* <p className="text-red-500 text-sm">
                  {fields.subdirectory.errors}
                </p> */}
              </div>

              <div className="grid gap-2">
                <Label>Description</Label>
                {/* <Textarea
                  name={fields.description.name}
                  key={fields.description.key}
                  defaultValue={fields.description.initialValue}
                  placeholder="Small Description for your site"
                /> */}
                {/* <p className="text-red-500 text-sm">
                  {fields.description.errors}
                </p> */}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {/* <SubmitButton text="Create Site" /> */}
          </CardFooter>
        {/* </form> */}
      </Card>
    </div>
    )
}