"use client";

import { IoMdMoon, IoMdSunny } from "react-icons/io";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Menubar className="border-0 bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="flex flex-row items-center gap-2 text-sm lg:text-lg">
          {currentTheme === "dark" ? (
            <>
              <IoMdMoon />
              Dark
            </>
          ) : (
            <>
              <IoMdSunny />
              Light
            </>
          )}
        </MenubarTrigger>
        <MenubarContent className="bg-primary">
          <MenubarItem
            onClick={() => setTheme("light")}
            className="text-primary-foreground"
          >
            Light
          </MenubarItem>
          <MenubarItem
            onClick={() => setTheme("dark")}
            className="text-primary-foreground"
          >
            Dark
          </MenubarItem>
          <MenubarItem
            onClick={() => setTheme("system")}
            className="text-primary-foreground"
          >
            System
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
