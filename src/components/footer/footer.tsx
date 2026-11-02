"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const pathname = usePathname();

  // On the main page, the ContactSection already contains the Swiss-editorial footer bottom bar
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-[#E5E5E5] dark:border-neutral-800 bg-[#F8F8F6] dark:bg-[#0F0F0F] px-4 py-6 sm:flex-row md:px-6 sm:justify-between text-[#0F0F0F] dark:text-neutral-100">
      <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0F0F0F] dark:text-white">
        <span>{config.author}</span>
        <span className="text-neutral-400 dark:text-neutral-600 font-normal">|</span>
        <span>OPEN TO WORK</span>
      </div>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
