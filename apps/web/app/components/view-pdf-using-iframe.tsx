import React from "react";

export default function ViewPDFUsingIframe() {
  return (
    <iframe
      src="/sample.pdf"
      className="w-full h-screen"
      style={{ border: "none" }}
    />
  );
}
