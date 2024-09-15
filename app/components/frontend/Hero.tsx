import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero.png";

export function Hero() {
  return (
    <>
      <div className="relative flex flex-col w-full py-5 md:flex-row md:items-center md:justify-center">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} className="size-10" alt="Logo" />
            <h4 className="text-3xl font-semibold">
              Blog<span className="text-primary">Nest</span>
            </h4>
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
