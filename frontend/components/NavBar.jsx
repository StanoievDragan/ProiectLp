import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-screen">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600"><Link href="/">ProjectLP</Link></h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/cart" className="hover:text-blue-600">Cart</Link>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
        </div>
      </div>
      {/*<div className="bg-amber-50">*/}
      {/*  <p>*/}
      {/*    Welcome to my website! This is a paragraph displayed right under the navbar.*/}
      {/*  </p>*/}
      {/*</div>*/}
      </nav>
  );

}
