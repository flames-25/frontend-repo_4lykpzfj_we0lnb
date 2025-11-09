import React from 'react';
import HeaderNav from './components/HeaderNav';
import HeroCapsule from './components/HeroCapsule';
import CatalogGrid from './components/CatalogGrid';
import FooterPolicies from './components/FooterPolicies';

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white">
      <HeaderNav />
      <main>
        <HeroCapsule />
        <CatalogGrid />
      </main>
      <FooterPolicies />
    </div>
  );
}

export default App;
