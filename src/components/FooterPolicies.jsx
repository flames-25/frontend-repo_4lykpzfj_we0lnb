import React from 'react';

const FooterPolicies = () => {
  return (
    <footer id="policies" className="bg-zinc-50 border-t border-zinc-200 mt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-zinc-900">About</h4>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            ALEKSEI DOLGIKH crafts refined capsule wardrobes: precision tailoring, engineered fabrics, and enduring silhouettes for contemporary life.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900">Policies</h4>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>Shipping & Delivery: 2–5 business days worldwide.</li>
            <li>Returns: 14 days unworn with tags via in‑app portal.</li>
            <li>Warranty: Manufacturing defects covered for 1 year.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>Support: support@alekseidolgikh.com</li>
            <li>Press: press@alekseidolgikh.com</li>
            <li>Wholesale: showroom@alekseidolgikh.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900">Newsletter</h4>
          <p className="mt-3 text-zinc-600">Capsule drops, restocks, and private previews.</p>
          <form className="mt-3 flex gap-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" required placeholder="you@domain.com" className="flex-1 rounded-full border border-zinc-300 px-4 py-2 bg-white" />
            <button className="px-4 py-2 rounded-full bg-black text-white text-sm">Join</button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 border-t border-zinc-200 text-xs text-zinc-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} ALEKSEI DOLGIKH</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-zinc-700">Terms</a>
          <a href="#" className="hover:text-zinc-700">Privacy</a>
          <a href="#" className="hover:text-zinc-700">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPolicies;
