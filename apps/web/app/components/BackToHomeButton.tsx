"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MoveLeft } from "lucide-react";

export default function BackToHomeButton() {
  const pathname = usePathname();

  if (pathname == "/") {
    return null;
  }

  return (
    <Link
      href="/"
      className="fixed flex gap-x-2 items-center bottom-6 right-6 rounded bg-white shadow font-semibold px-6 py-2 cursor-pointer hover:bg-gray-50"
    >
      <MoveLeft /> Go back
    </Link>
  );
}
