'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { allProducts, four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const Shop = () => {

    const[product, setProduct] = useState<Product[]>([])

    useEffect (() => {
        async function fetchproduct() {
            const fetchedProduct : Product[] = await client.fetch(four)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])
     
  return (
    <div>
     
     <div className='max-w-6xl max-auto px-4 py8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>OUR NEW ARRIVALS</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

    {product.map((product) => (
        <div key={product._id}
        className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'
        >
          <Link href={`/product/${product.slug.current}`}>
            {product.name}
            {product.image && (
              
              <Image 
              src={urlFor(product.image).url()} 
              alt="image"
              width={200}
              height={200} 
              className='w-full h-48 object-cover rounded-md'
             />
             )}
           <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
           <p className='text-grey-500 mt-2'>
            {product.price ? `$${product.price}}` : "Price not available"} 
           </p>
           </Link>
           </div>
    ))}
    </div>
    </div>
   
  </div>
  );
  }
export default Shop;