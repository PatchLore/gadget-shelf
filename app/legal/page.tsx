import Link from 'next/link';

export default function LegalPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-50 mb-8">Affiliate Disclosure</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              As an Amazon Associate, we earn from qualifying purchases. This means that when you click on certain links on our site and make a purchase, we may receive a small commission at no additional cost to you.
            </p>

            <p className="leading-relaxed">
              Our reviews are based on genuine editorial testing and evaluation. We test products ourselves and provide honest, unbiased opinions. The affiliate relationships we maintain do not influence our editorial content or product ratings.
            </p>

            <p className="leading-relaxed">
              We only recommend products that we have personally tested and believe will provide value to our readers. Your trust is important to us, and we are committed to maintaining transparency in all our recommendations.
            </p>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
