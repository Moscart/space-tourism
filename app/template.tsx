"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <header className="flex justify-between xl:grid xl:grid-cols-2 md:justify-normal md:items-center p-6 md:p-0 absolute w-full lg:mt-10">
        <div className="md:px-10 lg:ps-16 lg:pe-0 lg:flex">
          <Link href="/">
            <Image
              alt="Icon"
              src={"/assets/shared/logo.svg"}
              width={40}
              height={40}
              className="md:w-12 md:h-12"
            />
          </Link>
          <div className="hidden lg:flex-grow lg:relative lg:flex lg:items-center">
            <Separator className="bg-white/15 h-[2px] relative xl:absolute left-16 w-[22vw] xl:w-[97.5%] z-10" />
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Image
              alt="Icon"
              src={"/assets/shared/icon-hamburger.svg"}
              width={24}
              height={24}
            />
          </SheetTrigger>
          <SheetContent className="">
            <div className="grid gap-8 text-white text-left ms-8">
              <div className="flex justify-between">
                <Link href={"/"} className="preset-8 w-max peer">
                  <span className="font-bold">00</span>&nbsp; HOME
                </Link>
                <Separator
                  orientation="vertical"
                  className={cn(
                    "bg-white w-[3px] peer-hover:block",
                    pathname !== "/" && "hidden"
                  )}
                />
              </div>
              <div className="flex justify-between">
                <Link href={"/destination"} className="preset-8 w-max peer">
                  <span className="font-bold">01</span>&nbsp; DESTINATION
                </Link>
                <Separator
                  orientation="vertical"
                  className={cn(
                    "bg-white w-[3px] peer-hover:block",
                    pathname !== "/destination" && "hidden"
                  )}
                />
              </div>
              <div className="flex justify-between">
                <Link href={"/crew"} className="preset-8 w-max peer">
                  <span className="font-bold">02</span>&nbsp; CREW
                </Link>
                <Separator
                  orientation="vertical"
                  className={cn(
                    "bg-white w-[3px] peer-hover:block",
                    pathname !== "/crew" && "hidden"
                  )}
                />
              </div>
              <div className="flex justify-between">
                <Link href={"/technology"} className="preset-8 w-max peer">
                  <span className="font-bold">03</span>&nbsp; TECHNOLOGY
                </Link>
                <Separator
                  orientation="vertical"
                  className={cn(
                    "bg-white w-[3px] peer-hover:block",
                    pathname !== "/technology" && "hidden"
                  )}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex md:flex-row-reverse md:gap-11 md:items-center md:flex-grow bg-white/5 backdrop-blur-2xl pe-10 ps-10 lg:ps-16 lg:pe-16">
          <div className="relative py-10">
            <Link href={"/technology"} className="preset-8 peer">
              <span className="font-bold">03</span>&nbsp; TECHNOLOGY
            </Link>
            <Separator
              className={cn(
                "bg-white h-[3px] absolute bottom-0 w-full peer-hover:block",
                pathname !== "/technology" && "hidden"
              )}
            />
          </div>
          <div className="relative py-10">
            <Link href={"/crew"} className="preset-8 peer">
              <span className="font-bold">02</span>&nbsp; CREW
            </Link>
            <Separator
              className={cn(
                "bg-white h-[3px] absolute bottom-0 w-full peer-hover:block",
                pathname !== "/crew" && "hidden"
              )}
            />
          </div>
          <div className="relative py-10">
            <Link href={"/destination"} className="preset-8 peer">
              <span className="font-bold">01</span>&nbsp; DESTINATION
            </Link>
            <Separator
              className={cn(
                "bg-white h-[3px] absolute bottom-0 w-full peer-hover:block",
                pathname !== "/destination" && "hidden"
              )}
            />
          </div>
          <div className="relative py-10">
            <Link href={"/"} className="preset-8 peer">
              <span className="font-bold">00</span>&nbsp; HOME
            </Link>
            <Separator
              className={cn(
                "bg-white h-[3px] absolute bottom-0 w-full peer-hover:block",
                pathname !== "/" && "hidden"
              )}
            />
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
