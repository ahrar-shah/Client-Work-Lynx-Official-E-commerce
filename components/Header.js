import Link from 'next/link';
export default function Header() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-4">
        <Link href="/"><a className="font-bold text-lg">Lynx Graphics Official</a></Link>
        <Link href="/shop"><a>Shop</a></Link>
        <div className="relative">
          <select onChange={(e)=>{ if(e.target.value) window.location.href=e.target.value }} className="bg-gray-700 p-1 rounded">
            <option value="">Products</option>
            <option value="/shop">New Arrivals</option>
            <option value="/carlogo">Car Logos</option>
            <option value="/sheildlogo">Sheild Logos</option>
            <option value="/collablogo">Collab Logos</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3">
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/cart"><a>Cart</a></Link>
      </div>
    </nav>
  );
}
