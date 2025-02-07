


"use client"
import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'

interface Iproducts {
  imageUrl: string;
  discountPercent: number;
  isNew: boolean;
  name: string;
  description: string;
  price: number;
  _id: string;
}


const rating = [
  <IoIosStar key={1} />,
  <IoIosStar key={2} />,
  <IoIosStar key={3} />,
  <IoIosStar key={4} />,
  <IoIosStar key={5} />,
];


// const [product,setproduct] =useState()
export default function Shirt () {

  const [products, setProducts] = useState<Iproducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products with error handling
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts: Iproducts[] = await client.fetch(
            `*[_type  == 'product' && category == 'tshirt']{
                "imageUrl": image.asset->url,
                category,
                discountPercent,
                isNew,
                name,
                description,
                price,
                _id
              }[0...4]`
        );
        setProducts(fetchedProducts);
      } catch (err: any) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex  justify-center items-center h-screen">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }
  return (
      <div>
           <>

           <div className="w-full h-full mt-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center">New arrivals</h1>
      <div className="relative mt-10 overflow-x-auto flex space-x-5 px-8">
        {products.map((data) => (
          <div key={data._id} className="flex-shrink-0">
            <Link href={`/product/${data._id}`}>
              <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                {data.imageUrl ? (
                  <Image
                    src={urlFor(data.imageUrl).url()}
                    alt={data.name}
                    className="w-full h-full rounded-[20px]"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center bg-gray-300 rounded-[20px]">
                    <p>No Image</p>
                  </div>
                )}
              </div>
            </Link>
            <div className="pl-2">
              <p className="text-lg mt-2 font-bold">{data.name}</p>
              <div className="flex text-yellow-400">
                {rating.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <p className="font-bold mt-1">
                ${data.price.toFixed(2)}
                {data.discountPercent ? (
                  <span className="text-gray-400 font-bold line-through ml-2">
                    {data.discountPercent}%
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-start mt-5">
        <Link href="/casual">
          <Button
            variant={"outline"}
            className="sm:mt-0 w-[80%] sm:w-[200px] rounded-[20px]"
          >
            View all
          </Button>
        </Link>
      </div>
    </div>
{/* 
<div className="w-full h-full mt-9 max-w-screen-xl mx-auto">
  <h1 className="md:text-4xl text-3xl font-extrabold text-center ">Top Selling</h1>
  <div className="flex space-x-5 overflow-x-auto  px-14 mt-9 relative">

    {
        products.map((detail:any)=>{
            return(
                <div key={detail.id} className="flex-shrink-0">
                  
                    <Link href={`/arrivals/${detail.id}`}>
                    <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                    <Image src={detail.img_url} alt={detail.title} width={100} height={100} 
                    className="w-full h-full rounded-[20px]"></Image>
                    </div>
                    </Link>
                   
                    <div className="pl-2">
                    <p className="mt-3 text-lg font-bold">{detail.title}</p>
                    <div  className="flex text-yellow-500 ">{rating.map((icon, index)=>(
                    <span key={index}>{icon}</span>))}
                    </div>

                    <p className="font-bold mt-2 ">{detail.price}{""} <span className="font-bold text-gray-500 line-through"> {detail.old_rate} </span></p>
                    </div>
                </div>
            );
        })
    }
  </div>
</div> */}
{/* 
<div className="flex justify-center items-start mt-5">
  <Link href="/casual">
  <Button variant={"outline"} className="sm:mt-0  sm:w-[200px] rounded-[20px] "> View All </Button>
  </Link>
</div> */}


</>
      </div>
     

  )
}
