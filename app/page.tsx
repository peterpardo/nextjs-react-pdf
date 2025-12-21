"use client";

import ViewPDFUsingALink from "@/app/components/view-pdf-using-a-link";
import dynamic from "next/dynamic";

const ReactPdfRendererComponent = dynamic(
  () => import("./components/react-pdf-renderer.client"),
  { ssr: false }
);

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Next.js React PDF Examples
      </h1>

      <ReactPdfRendererComponent />
      <ViewPDFUsingALink />
    </main>
  );
}
