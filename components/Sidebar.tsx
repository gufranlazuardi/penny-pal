"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import moneyLogo from "../public/icons/money-logo.svg";
import { sidebarLinks } from "@/constant";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center">
          <div className="flex gap-2 items-center mb-10">
            <Image
              src={moneyLogo}
              width={10}
              height={5}
              alt={"Bank Penny Logo"}
              className="size-[24px] max-xl:size-14"
            />
            <h1 className="2xl:text-26 font-ibm-plex-serif text-[24px] font-bold text-black-1 max-xl:hidden">
              Bank Penny
            </h1>
          </div>

          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn("sidebar-link", {
                  "bg-bank-gradient": isActive,
                })}
              >
                <div className="relative size-6">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({
                      "brightness-[3] invert-0": isActive,
                    })}
                  />
                </div>
                <p
                  className={cn("sidebar-label", {
                    "!text-white": isActive,
                  })}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </Link>
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
