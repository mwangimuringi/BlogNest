import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
  return (
    <div className="w-full flex flex-1 items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="">
            <Check className="size-12 rounded-full bg-green-500/30 text-green-500 p-2" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h2 className="text-xl font-semibold">Payment successful</h2>
            <p className="text-sm mt-2 text-muted-foreground tracking-tight">
              Congratulation you have successfully paid for your subscription.
            </p>

            <Button asChild className="mt-5 w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
