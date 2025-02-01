'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoCloseCircleOutline } from 'react-icons/io5'; // For cross icon

const CartPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header with Cart Button (you can link it to cart button from the header) */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          
          <Link href="/cart" className="text-white">
            Cart
          </Link>
        </div>
      </header>

      {/* Section 1: Cart Header */}
<section className="bg-white py-10">
  <div className="container mx-auto px-4 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <ul className='flex gap-8'> {/* corrected gap-30 to gap-8 for better spacing */}
        <li>
          <h2 className="text-4xl font-bold">Shopping Cart</h2>
        </li>
        <li>
          <IoCloseCircleOutline className="text-6xl text-gray-500 mt-4" />
        </li>
      </ul>
    </div>
  </div>
</section>

<div className="border-t border-gray-300"></div>


      {/* Section 2: Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Product Image */}
          <div className="flex items-center">
            <Image
              src="/images/asgaardsofa.jpeg"
              alt="Asgaard Sofa"
              width={400}
              height={400}
              className="object-cover rounded"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col ml-4">
            <p className="text-xl font-bold">Asgaard Sofa</p>
            <p className="text-gray-500">1 x Asgaard Sofa</p>
            <p className="text-lg font-bold mt-2">Rs. 250,000.00</p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-300"></div>

      {/* Section 3: Subtotal */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-2">
          <div className="flex items-center justify-start">
            <p className="text-lg font-bold">Subtotal</p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-lg font-bold">Rs. 250,000.00</p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-300"></div>

      {/* Section 4: Buttons */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 gap-4">
          <Link
            href="/shop/asgaardsofa/cart"
            className="flex items-center justify-center py-3 border-2 border-black rounded text-center text-black hover:bg-gray-200"
          >
            <span>View Cart</span>
          </Link>
          <Link
            href="/shop/asgaardsofa/cart/checkout"
            className="flex items-center justify-center py-3 border-2 border-black rounded text-center text-black hover:bg-gray-200"
          >
            <span>Checkout</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CartPage;