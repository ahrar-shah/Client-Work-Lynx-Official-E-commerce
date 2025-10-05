import { useEffect, useState } from 'react';
import Header from '../../components/Header';

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('/api/orders', { credentials: 'same-origin' }).then(r=>r.json()).then(d=>setOrders(d.orders || []));
    fetch('/api/products').then(r=>r.json()).then(d=>setProducts(d.products || []));
  },[]);

  async function updateOrder(orderId, status) {
    const res = await fetch('/api/orders', { method: 'PATCH', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ orderId, status }) });
    const d = await res.json();
    if (d.ok) alert('Updated'); else alert('Error');
    // refresh
    const rr = await fetch('/api/orders');
    const dd = await rr.json();
    setOrders(dd.orders || []);
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <section className="mt-6">
          <h3 className="font-semibold">Orders</h3>
          <div className="space-y-3">
            {orders.map(o=>(
              <div key={o.id} className="border p-3 rounded">
                <div><strong>{o.id}</strong> - {o.status}</div>
                <div>By: {o.user.email} / {o.user.name}</div>
                <div>AI Logo Name: {o.aiLogoName}</div>
                <div className="mt-2">
                  <button className="mr-2 px-3 py-1 bg-green-600 text-white" onClick={()=>updateOrder(o.id,'approved')}>Approve</button>
                  <button className="px-3 py-1 bg-red-600 text-white" onClick={()=>updateOrder(o.id,'disapproved')}>Disapprove</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h3 className="font-semibold">Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {products.map(p=>(
              <div key={p.id} className="border p-3 rounded">
                <img src={`/api/github-file?path=${encodeURIComponent(p.imagePath)}`} alt={p.title} className="h-36 w-full object-cover" />
                <div className="mt-2 font-semibold">{p.title}</div>
                <div>PKR {p.price}</div>
                <div className="text-sm">{p.shortDesc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
