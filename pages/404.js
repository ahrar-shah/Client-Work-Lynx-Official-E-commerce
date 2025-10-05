import Link from 'next/link';
export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Yeh page mil hi nahi raha — Lynx Graphics Official pe wapas jao.</p>
      <Link href="/"><a className="mt-6 px-4 py-2 bg-black text-white rounded">Home</a></Link>
    </div>
  );
}
