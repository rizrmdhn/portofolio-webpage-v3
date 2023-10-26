import React from "react";
import { Menubar, MenubarMenu } from "./ui/menubar";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <div className="flex h-header-height flex-row items-center justify-between border-b-2 border-primary text-primary">
      <h1 className="text-sm font-bold lg:text-2xl">Portofolio</h1>
      <Menubar className="flex flex-row justify-between border-0 bg-transparent">
        <MenubarMenu>
          <Link href="#project" className="mr-1 text-sm lg:text-xl">
            Project
          </Link>
          <Link href="#link" className="ms-1 text-sm lg:text-xl">
            Contact
          </Link>
        </MenubarMenu>
      </Menubar>
      <ThemeToggler />
    </div>
  );
}
