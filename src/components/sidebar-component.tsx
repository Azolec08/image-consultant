"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandFacebookFilled,
  IconMail,
  IconMoodShare,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { DialogComponent } from "./dialog-component";
import { TooltipComponent } from "./tooltip-component";

export function SidebarDemo() {
  const links = [
    {
      label: "+6588370587",
      href: "#",
      icon: (
        <IconPhone className="text-blue-500 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "maricelcruz856@gmail.com",
      href: "#",
      icon: (
        <IconMail className="text-blue-500 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Arthancel?mibextid=ZbWKwL",
      icon: (
        <IconBrandFacebookFilled className="text-blue-500 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "See more",
      href: "https://125613sg.imgcorp.com/linkbio/",
      icon: (
        <IconMoodShare className="text-blue-500 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[550px]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "",
                href: "https://125613sg.imgcorp.com",
                icon: <TooltipComponent />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="https://www.facebook.com/Arthancel?mibextid=ZbWKwL"
      target="_blank"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/profile.jpg"
        alt="avatar"
        width={60}
        height={60}
        className="h-auto w-15 flex-shrink-0 rounded-full"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <span className="font-bold">Maricel D. Cruz</span>
      </motion.span>
    </Link>
  );
};

// Dummy dashboard component with content
export const Dashboard = () => {
  const bigImages = [
    {
      img: "/img1.jpg",
    },
    {
      img: "/img2.jpg",
    },
    {
      img: "/img3.jpg",
    },
    {
      img: "/img4.jpg",
    },
  ];

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="grid grid-cols-2 gap-4 flex-1">
          {bigImages.map((image, index) => (
            <div
              key={index}
              className="relative h-[15rem] w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 "
            >
              <DialogComponent image={image.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
