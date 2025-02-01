import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { Product } from "../../types/products"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"




interface ProductPageProps {
    params : Promise<{slug: string}>
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        price,

        }`, {slug}
    )
}

export default async function ProductPage({params}: ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug);

    return(
        <div className="max-w-7xl max-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square ">
                    {product.image && (
                        <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-cols gap-8">
                    <h1 className="text-4xl font-bold">
                        {product.name}
                    </h1>
                    <p className="text-2xl font-sans">
                        {product.price}
                    </p>
                </div>
            </div>
        </div>
    )
};
