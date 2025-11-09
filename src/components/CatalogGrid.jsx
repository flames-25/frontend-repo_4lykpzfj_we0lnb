import React, { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

// Mock SKUs (12–18) with minimal fields for catalog
const SKU_DATA = [
  { id: 'AD-001', name: 'Structure Tee', priceEUR: 120, priceRUB: 10800, color: 'Black', size: ['S','M','L'], capsule: 'I', image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-002', name: 'Contour Tee', priceEUR: 120, priceRUB: 10800, color: 'White', size: ['S','M','L'], capsule: 'I', image: 'https://images.unsplash.com/photo-1706698243505-1daf41fd9fa5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJ1Y3R1cmUlMjBUZWV8ZW58MHwwfHx8MTc2MjY4NzczMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'AD-003', name: 'Track Jacket', priceEUR: 280, priceRUB: 25200, color: 'Graphite', size: ['M','L'], capsule: 'I', image: 'https://images.unsplash.com/photo-1706698243505-1daf41fd9fa5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJ1Y3R1cmUlMjBUZWV8ZW58MHwwfHx8MTc2MjY4NzczMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'AD-004', name: 'Panel Hoodie', priceEUR: 220, priceRUB: 19800, color: 'Black', size: ['S','M','L','XL'], capsule: 'I', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-005', name: 'Pleat Trouser', priceEUR: 260, priceRUB: 23400, color: 'Stone', size: ['46','48','50'], capsule: 'II', image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-006', name: 'Split Trouser', priceEUR: 260, priceRUB: 23400, color: 'Black', size: ['46','48','50'], capsule: 'II', image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-007', name: 'Velocity Sneaker', priceEUR: 380, priceRUB: 34200, color: 'White', size: ['40','41','42','43'], capsule: 'II', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-008', name: 'Silhouette Coat', priceEUR: 620, priceRUB: 55800, color: 'Charcoal', size: ['S','M','L'], capsule: 'II', image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-009', name: 'Layered Shirt', priceEUR: 180, priceRUB: 16200, color: 'Blue', size: ['S','M','L'], capsule: 'III', image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-010', name: 'Drape Shirt', priceEUR: 180, priceRUB: 16200, color: 'White', size: ['S','M','L'], capsule: 'III', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-011', name: 'Trace Skirt', priceEUR: 210, priceRUB: 18900, color: 'Black', size: ['34','36','38'], capsule: 'III', image: 'https://images.unsplash.com/photo-1706698243505-1daf41fd9fa5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJ1Y3R1cmUlMjBUZWV8ZW58MHwwfHx8MTc2MjY4NzczMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'AD-012', name: 'Rib Tank', priceEUR: 95, priceRUB: 8550, color: 'Ivory', size: ['XS','S','M'], capsule: 'III', image: 'https://images.unsplash.com/photo-1508147840258-7d4e11798d4d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWxvY2l0eSUyMFNuZWFrZXJ8ZW58MHwwfHx8MTc2MjY4NzczMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'AD-013', name: 'Curve Belt', priceEUR: 140, priceRUB: 12600, color: 'Black', size: ['S','M','L'], capsule: 'IV', image: 'https://images.unsplash.com/photo-1560351094-3982a3e2087a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWxob3VldHRlJTIwQ29hdHxlbnwwfDB8fHwxNzYyNjg3NzMyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'AD-014', name: 'Arc Bag', priceEUR: 520, priceRUB: 46800, color: 'Black', size: ['OS'], capsule: 'IV', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-015', name: 'Sphere Ring', priceEUR: 160, priceRUB: 14400, color: 'Silver', size: ['6','7','8'], capsule: 'IV', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop' },
  { id: 'AD-016', name: 'Line Cap', priceEUR: 90, priceRUB: 8100, color: 'Black', size: ['OS'], capsule: 'IV', image: 'https://images.unsplash.com/photo-1507274301514-7de9f124ff54?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcmFjZSUyMFNraXJ0fGVufDB8MHx8fDE3NjI2ODc3MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'AD-017', name: 'Grid Scarf', priceEUR: 130, priceRUB: 11700, color: 'Grey', size: ['OS'], capsule: 'IV', image: 'https://images.unsplash.com/photo-1639322534617-51f7e2612f33?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaWIlMjBUYW5rfGVufDB8MHx8fDE3NjI2ODc3MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const allColors = [...new Set(SKU_DATA.map(p => p.color))];
const allCapsules = [...new Set(SKU_DATA.map(p => p.capsule))];

const CatalogGrid = () => {
  const [color, setColor] = useState('All');
  const [capsule, setCapsule] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currency, setCurrency] = useState('EUR');

  const products = useMemo(() => {
    return SKU_DATA.filter(p => (color==='All' || p.color===color))
      .filter(p => (capsule==='All' || p.capsule===capsule))
      .filter(p => (currency === 'EUR' ? p.priceEUR : p.priceRUB) <= maxPrice);
  }, [color, capsule, maxPrice, currency]);

  const priceLabel = (p) => currency === 'EUR' ? `€${p.priceEUR}` : `${p.priceRUB.toLocaleString('ru-RU')}₽`;

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Catalog</h2>
          <div className="flex items-center gap-2 text-sm">
            <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Filters</span>
            <select value={color} onChange={(e)=>setColor(e.target.value)} aria-label="Filter by color" className="border rounded-full px-3 py-1.5 bg-white">
              <option>All</option>
              {allColors.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={capsule} onChange={(e)=>setCapsule(e.target.value)} aria-label="Filter by capsule" className="border rounded-full px-3 py-1.5 bg-white">
              <option>All</option>
              {allCapsules.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)} aria-label="Currency" className="border rounded-full px-3 py-1.5 bg-white">
              <option>EUR</option>
              <option>RUB</option>
            </select>
            <label className="ml-2 text-gray-600">
              <span className="sr-only">Max price</span>
              <input type="range" min={50} max={1000} value={maxPrice} onChange={(e)=>setMaxPrice(parseInt(e.target.value))} />
            </label>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map(p => (
            <article key={p.id} className="group rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200">
              <a href={`#p-${p.id}`} className="block">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-zinc-900">{p.name}</h3>
                    <span className="text-sm text-zinc-700">{priceLabel(p)}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">Capsule {p.capsule} • {p.color}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogGrid;
