import { useRouter } from 'next/router';
import useSWR from 'swr';
import Header from '../../components/Header';

const fetcher = (url) => fetch(url).then(r=>r.json());

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/product?id=${id}` : null, fetcher);
  const product = data?.product;

  if (!product) return (<div><Header /><main className="p-6">Loading...</main></div>);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={`/api/github-file?path=${encodeURIComponent(product.imagePath)}`} alt={product.title} className="w-full h-96 object-cover" />
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-2">{product.shortDesc}</p>
            <div className="mt-4">
              <strong>Price:</strong> PKR {product.price}
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={()=>{
                // add to cart
                const cart = JSON.parse(localStorage.getItem('lynx_cart') || '[]');
                cart.push({ productId: product.id, qty: 1 });
                localStorage.setItem('lynx_cart', JSON.stringify(cart));
                alert('Added to cart');
              }}>Add to cart</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={()=>{
                // buy now => save single item as cart and go to checkout
                localStorage.setItem('lynx_cart', JSON.stringify([{ productId: product.id, qty:1 }]));
                window.location.href = '/checkout';
              }}>Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
