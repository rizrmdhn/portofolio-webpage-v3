"use client";

import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

export default function TypeText({ className }: { className?: string }) {
  return (
    <>
      <TypeAnimation
        sequence={[
          "I am a Frontend Developer",
          500,
          "I am a Web Developer",
          500,
          "I am a React Developer",
          500,
          "I am a Javascript Developer",
          500,
          "I am a Backend Developer",
        ]}
        className={cn("text-lg text-primary", className)}
        repeat={Infinity}
      />
    </>
  );
}
