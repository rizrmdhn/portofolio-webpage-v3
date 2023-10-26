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
        <MenubarTrigger>
          {currentTheme === "dark" ? <IoMdMoon /> : <IoMdSunny />}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => setTheme("light")}>Light</MenubarItem>
          <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
          <MenubarItem onClick={() => setTheme("system")}>System</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
