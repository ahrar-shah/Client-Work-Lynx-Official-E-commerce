import Link from 'next/link';
export default function ProductCard({ product }) {
  const imgUrl = `/api/github-file?path=${encodeURIComponent(product.imagePath)}`;
  return (
    <div className="border rounded p-3">
      <img src={imgUrl} alt={product.title} className="w-full h-48 object-cover mb-3" />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm">{product.shortDesc}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">PKR {product.price}</span>
        <div className="flex gap-2">
          <Link href={`/product/${product.id}`}><a className="px-3 py-1 bg-blue-600 text-white rounded">View</a></Link>
        </div>
      </div>
    </div>
  );
}
