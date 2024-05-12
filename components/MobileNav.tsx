"use client";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import moneyLogo from "../public/icons/money-logo.svg";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer items-center">
              <div className="flex gap-2 items-center mb-10">
                <Image src={moneyLogo} width={10} height={5} alt={"Bank Penny Logo"} />
                <h1 className="text-26 font-bold font-ibm-plex-serif text-black-1">Bank Penny</h1>
              </div>
            </Link>

            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex flex-col gap-6 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <div className="relative size-6">
                            <Image
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              className={cn({
                                "brightness-[3] invert-0": isActive,
                              })}
                            />
                          </div>
                          <p
                            className={cn("text-16 font-semibold text-black-2", {
                              "text-white": isActive,
                            })}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
              FOOTER
            </div>

            <div className="mobilenav-sheet">
              <SheetClose asChild></SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
