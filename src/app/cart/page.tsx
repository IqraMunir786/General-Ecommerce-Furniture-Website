import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/images/shop.png" 
              alt="Shop Icon"
              width={100}   
              height={100}  
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Cart</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Cart
          </p>
        </div>
      </section>

      {/* 2nd Section: Cart Items and Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (5 columns layout) */}
            <div className="space-y-6 md:w-[60%]">
              <div className="flex gap-4">
                {/* Buttons: Product, Price, Quantity, Subtotal */}
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Product</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Price</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Quantity</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Subtotal</button>
              </div>

              {/* Product Details (5 columns grid) */}
              <div className="grid grid-cols-5 gap-4 mt-6">
                {/* First Row */}
                <div></div> {/* Empty cell for layout alignment */}
                <div className="text-gray-700">
                  <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
                </div>
                <div className="text-gray-500">
                  <p>Rs. 250,000.00</p>
                </div>
                <div>
                  <input
                    type="number"
                    value="1"
                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rs. 250,000.00</p>
                </div>

                {/* Second Row */}
                <div className="flex justify-center">
                  <Image
                    src="/images/asgaardsofa.jpeg"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
              </div>
            </div>

            {/* Second Column for Cart Totals */}
            <div className="space-y-6">
              <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

              {/* Subtotal */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium">Rs. 250,000.00</span>
              </div>

              {/* Total with Golden Color */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold text-yellow-500">Rs. 250,000.00</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Free Delivery</h2>
              <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* Second Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">90 Days Return</h2>
              <p className="text-lg text-gray-700 text-">If the product has an issue, consectetur adipim scing elit.</p>
            </div>

            {/* Third Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Secure Payments</h2>
              <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;