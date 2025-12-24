import Link from "next/link";

export default function Page() {
  return (
    <main className="grid place-content-center h-screen gap-y-4">
      <h1 className="text-3xl font-bold underline">
        Next.js React PDF Examples
      </h1>

      <div className="flex flex-col gap-y-2">
        <Link className="bg-blue-50 px-8 py-2 rounded text-center font-semibold cursor-pointer hover:bg-blue-100" href="/examples/react-pdf-component">View PDF using <span className="italic">react-pdf</span></Link>
        <Link className="bg-blue-50 px-8 py-2 rounded text-center font-semibold cursor-pointer hover:bg-blue-100" href="/examples/react-pdf-renderer">Create/Render PDF using <span className="italic">react-pdf/renderer</span></Link>
        <Link className="bg-blue-50 px-8 py-2 rounded text-center font-semibold cursor-pointer hover:bg-blue-100" href="/sample.pdf" target="_blank">View PDF using a link</Link>
        <Link className="bg-blue-50 px-8 py-2 rounded text-center font-semibold cursor-pointer hover:bg-blue-100" href="/examples/view-pdf-using-iframe">View PDF using iframe</Link>
      </div>
    </main>
  );
}
