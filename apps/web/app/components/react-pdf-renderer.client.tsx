"use client";

import dynamic from "next/dynamic";

export default function ReactPdfRendererComponent() {
  return dynamic(() => import("./react-pdf-renderer"), {
    ssr: false,
    loading: () => <p>Loading React PDF Renderer...</p>,
  });
}
