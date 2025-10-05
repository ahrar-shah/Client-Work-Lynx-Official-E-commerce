import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [aiLogoName, setAiLogoName] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Easypaisa');

  useEffect(()=> {
    const c = JSON.parse(localStorage.getItem('lynx_cart') || '[]');
    setCart(c);
  },[]);

  async function submitOrder() {
    // get user token from cookie is server side; API will require cookie
    if (!aiLogoName || !screenshot) { alert('AI Logo Name and payment screenshot required'); return; }
    // convert screenshot file to base64
    const b64 = await fileToBase64(screenshot);
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, paymentMethod, paymentScreenshotBase64: b64, aiLogoName, phoneNumber: '' })
    });
    const data = await res.json();
    if (data.ok) {
      alert('Order placed: ' + data.orderId);
      localStorage.removeItem('lynx_cart');
      window.location.href = '/';
    } else {
      alert('Error: ' + (data.error || 'unknown'));
    }
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-xl font-bold">Checkout</h2>
        <div className="mt-4">
          <label>AI Logo Name (Required)</label>
          <input className="border p-2 w-full" value={aiLogoName} onChange={(e)=>setAiLogoName(e.target.value)} />
        </div>
        <div className="mt-4">
          <label>Payment Method</label>
          <select value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} className="border p-2 w-full">
            <option>Easypaisa</option>
            <option>JazzCash</option>
          </select>
        </div>
        <div className="mt-4">
          <label>Payment Screenshot (Required)</label>
          <input type="file" accept="image/*" onChange={(e)=>setScreenshot(e.target.files[0])} />
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={submitOrder}>Confirm Order</button>
        </div>
      </main>
    </div>
  );
}
