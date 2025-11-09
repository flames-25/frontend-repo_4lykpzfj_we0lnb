import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Globe } from 'lucide-react';

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState('EN');
  const [currency, setCurrency] = useState('EUR');

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5" role="banner">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="h-14 flex items-center justify-between">
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xs tracking-wide border px-3 py-1.5 rounded-full bg-white/70 hover:bg-white transition"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>

          <a href="#top" className="flex-1 text-center font-semibold tracking-[0.35em] text-gray-900 select-none">
            ALEKSEI DOLGIKH
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-black/5">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-black/5">
              <Heart className="w-5 h-5" />
            </button>
            <button aria-label="Bag" className="p-2 rounded-full hover:bg-black/5">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-black/5 hidden sm:inline-flex">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={`md:flex items-center justify-between py-2 ${menuOpen ? 'block' : 'hidden md:block'}`}>
          <nav className="flex flex-wrap gap-4 text-sm text-gray-700" aria-label="Primary">
            <a href="#capsule" className="hover:opacity-70">Capsule</a>
            <a href="#catalog" className="hover:opacity-70">Catalog</a>
            <a href="#lookbook" className="hover:opacity-70">Lookbook</a>
            <a href="#policies" className="hover:opacity-70">Policies</a>
          </nav>
          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4" aria-hidden="true" />
              <label className="sr-only" htmlFor="lang">Language</label>
              <select id="lang" aria-label="Language" value={locale} onChange={(e)=>setLocale(e.target.value)} className="bg-transparent outline-none">
                <option>EN</option>
                <option>RU</option>
              </select>
            </div>
            <div className="text-sm">
              <label className="sr-only" htmlFor="currency">Currency</label>
              <select id="currency" aria-label="Currency" value={currency} onChange={(e)=>setCurrency(e.target.value)} className="bg-transparent outline-none">
                <option>EUR</option>
                <option>RUB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
