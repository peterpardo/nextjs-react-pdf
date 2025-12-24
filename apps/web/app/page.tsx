import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Next.js React PDF Examples
      </h1>

      <div>
        <Link href="/examples/react-pdf-component">View PDF using <span className="italic">react-pdf</span></Link>
        <Link href="/examples/react-pdf-renderer">Create/Render PDF using <span className="italic">react-pdf/renderer</span></Link>
      </div>
    </main>
  );
}
