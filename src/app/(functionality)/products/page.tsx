 "use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { IoIosStar } from 'react-icons/io'
import { StaticImageData } from 'next/image'

interface Items{
    id:number;
    title:string;
    price:number;
    img_url? :string[] | StaticImageData| string;
    category:string;
    description:string;
    size: string[];
    color: string[];
    qty: number;
    discount?: number;
    slug: string;
}



let rating = [<IoIosStar key={1} />,
<IoIosStar key={2} />,
<IoIosStar key={3} />,
<IoIosStar key={4} />,
<IoIosStar key={5} />]

const products :Items [] = [ 
    {
    title:"VERTICAL STRIPED SHIRT",
    price: 1200,
    id:1,
    img_url:["/pic9.png", "/pic10.png,"],
    category: "Clothing",
    description: "A high-quality cotton t-shirt with stylish design",
    size: ["s", "M", "L", "XL"],
    color: ["red", "blue", "black"],
    qty: 1,
    discount : 10,
    slug: "stylish-t-shirt", 
},
{
    title:" STRIPED SHIRT",
    price: 3500,
    id:2,
    img_url:["/pic1.png", "/pic4.png",],
    category: "comfortable",
    description: "Comfortable and durable running shoes for daily wear",
    size: ["s", "M", "L", "XL"],
    color: ["gray", "blue", "black"],
    qty: 1,
    discount : 15,
    slug: "STRIPED SHIRTS", 
},
{
    title:"Checked Shirt",
    price: 5000,
    id:3,
    img_url:["/pic3.png","/pic5.png"],
    category: "Electronics",
    description: "A high-quality cotton t-shirt with stylish design",
    size: ["s", "M", "L", "XL"],
    color: ["white", "gold", "black"],
    qty: 1,
    discount : 0,
    slug: "Checked Shirt", 
},
{
    title:"Blue Jeans",
    price: 1600,
    id:4,
    img_url:["/pic2.png", "/pic7.png,"],
    category: "accessories",
    description: "A sleek smart watch with fitness tracking features..",
    size: ["s", "M", "L", "XL"],
    color: ["brown", "blue", "black"],
    qty: 1,
    discount : 5,
    slug: "Blue Jeans", 
},
]




export default function Products() {
const products = useSelector((state:any) => state.item)
    return (
      <>
      <div className="w-full h-full  mt-9 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around space-x-5 overflow-x-auto  px-14 mt-9 relative">
          {
              products.map((item:any,index:any)=>{
                  return(
                      <div key={index}>
                          <Link href={`/products/${item.slug}`}>
                          <div className="w-[290px] h-[290px]  md:h-[290px] bg-[#F0EEED]  rounded-[20px]">
                          <Image src={item.img_url[0]} alt={item.title} width={200} height={200} 
                          className="w-full h-full rounded-[20px] "></Image>
                          </div>
                          </Link>

                          <h2 className='font-bold'>{item.title}</h2>
                          <p className='flex justify-start items-center  text-yellow-500'>{rating}</p>
                          <div className='flex space-x-3'>
                          <p className='font-bold'>{item.price}</p>
                        <p className='font-bold text-gray-500 line-through'>{item.discount}</p>
                        </div>
                      </div>
                  );
              })
          }
        </div>
      </div>
  
      </>
 )
}







































