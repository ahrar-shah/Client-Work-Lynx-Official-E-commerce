// pages/shop.js
import useSWR from 'swr';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const fetcher = url => fetch(url).then(r => r.json());

export default function Shop() {
  const { data } = useSWR('/api/products', fetcher);
  const products = data?.products || [];

  return (
    <>
      <Header />
      <main style={{ padding: 24 }}>
        <h1>Shop</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
    </>
  );
}
