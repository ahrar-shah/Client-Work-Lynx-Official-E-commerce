import useSWR from 'swr';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const fetcher = (url) => fetch(url).then(r=>r.json());

export default function Shop() {
  const { data } = useSWR('/api/products', fetcher);
  const products = data?.products || [];

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Lynx Graphics Official - Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
    </div>
  );
}
