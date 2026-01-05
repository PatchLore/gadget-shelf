import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-50">Product Not Found</h1>
        <p className="text-slate-400">The product you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block rounded-md bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-slate-950 font-semibold transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
