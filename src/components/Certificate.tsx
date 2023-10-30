import React from "react";
import QrCode from "@/assets/images/qrcode.png";
import Image from "next/image";

export default function Certificate() {
  return (
    <div
      id="link"
      className="mt-5 flex w-full flex-col items-center justify-center border-b-2 border-primary"
    >
      <h1 className="mb-5 text-2xl text-primary">Certificate</h1>
      <div className="mb-5 flex flex-col items-center justify-between">
        <button className="inline-flex items-center rounded bg-primary px-4 py-2 font-bold text-primary-foreground">
          <a
            href="https://drive.google.com/drive/folders/1eGR75JXuaX1fVWgFjmIR68b6npFNJQdE?usp=drive_link"
            target="_blank"
          >
            Click Here to See My Certificate
          </a>
        </button>
        <p className="mb-5 mt-5 text-primary">OR Scan This QR Code</p>
        <Image src={QrCode} alt="QrCode" width={200} height={200} />
      </div>
    </div>
  );
}
