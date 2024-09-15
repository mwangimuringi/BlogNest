import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Hero } from "./components/frontend/Hero";

export default async function Home() {
  const {getUser} = getKindeServerSession()
  const session = await getUser();
  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
      <Hero />
   </div>
  );
}
