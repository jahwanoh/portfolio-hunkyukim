import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-sides min-h-svh flex flex-col items-start justify-center gap-6">
      <h1 className="text-heading font-black uppercase">Page not found</h1>
      <Link href="/" className="text-subtitle font-semibold opacity-30 hover:opacity-60 transition-opacity">
        Back to home
      </Link>
    </main>
  );
}
