"use client";

import dynamic from "next/dynamic";

const DynamicReactPDFComponent = dynamic(
  () => import("./react-pdf-component"),
  {
    ssr: false,
    loading: () => <p>Loading React PDF Component...</p>,
  }
);

export default function ReactPDFComponentClient() {
  return <DynamicReactPDFComponent />;
}
