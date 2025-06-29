import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Hero } from "./components/frontend/Hero";
import { Logos } from "./components/frontend/Logos";
import { Features } from "./components/frontend/Features";
import { PricingTable } from "./components/shared/Pricing";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  if (session?.id) {
    return redirect("/dashboard");
  }
  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
      <Hero />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      <Logos />
      <Features />
      <PricingTable />
   </div>
  );
}
