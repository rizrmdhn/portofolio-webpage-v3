import React from "react";
import { Menubar, MenubarItem, MenubarMenu } from "./ui/menubar";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <div className="flex h-header-height flex-row items-center justify-between border-b-2 border-primary text-primary">
      <h1 className="text-sm font-bold">Portofolio</h1>
      <Menubar className="flex flex-row justify-between border-0 bg-transparent">
        <MenubarMenu>
          <Link href="#project" className="mr-1 text-sm">
            Project
          </Link>
          <Link href="#link" className="ms-1 text-sm">
            Contact
          </Link>
        </MenubarMenu>
      </Menubar>
      <ThemeToggler />
    </div>
  );
}
