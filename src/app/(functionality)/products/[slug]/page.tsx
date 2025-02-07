"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/app/Redux/features/cart";
import { useParams } from "next/navigation";

export default function SlugPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.item);

  
  const things: any = products.find((item: any) => item.slug === params.slug);

  
  const [cartPro, setcartPro] = useState<any>(null);

  useEffect(() => {
    if (things) {
      setcartPro({
        id: things.id,
        title: things.title,
        price: things.price,
        img_url: things.img_url,
        size: things.size,
        color: things.color[0],
        qty: things.qty,
        discount: things.discount,
        description: things.description,
      });
    }
  }, [things]); // Only runs when "things" changes

  if (!params?.slug) return <p>Loading...</p>;
  if (!things) return <p>Product not found</p>;
  if (!cartPro) return <p>Loading product details...</p>; // Avoids undefined errors

  let rating = [
    <IoIosStar key={1} />,
    <IoIosStar key={2} />,
    <IoIosStar key={3} />,
    <IoIosStar key={4} />,
    <IoIosStar key={5} />,
  ];

  return (
    <div className="mt-5 flex flex-col lg:flex-row justify-around">
     
      <div className="sm:space-y-3 w-full space-x-2 sm:space-x-0 p-2 sm:p-0 lg:w-[200px] flex justify-start items-center lg:flex-col">
        {things.img_url.map((img: string, index: number) => (
          <Image key={index} src={img} alt={things.title} width={100} height={100} className="w-full" />
        ))}
      </div>



      <div className="space-y-4 lg:w-[500px] flex justify-start items-center flex-col mt-4 sm:mt-0">
        <Image src={things.img_url[0]} alt={things?.title} width={100} height={100} className="w-full" />
      </div>

      {/* Product Details */}
      <div className="space-y-4 p-3 sm:p-0 mt-3 sm:mt-0 lg:w-[500px]">
        <h1 className="text-3xl font-extrabold lg:text-4xl">{things.title}</h1>
        <p className="flex text-xl text-yellow-500 justify-start items-center">{rating}</p>

        <div className="flex space-x-3 text-2xl">
          <p className="font-bold">{cartPro.price * cartPro.qty} </p>
          <p className="font-bold text-gray-400 line-through">
            {cartPro.discount > 0 &&
              (cartPro.price - (cartPro.price * cartPro.discount) / 100) * cartPro.qty}
          </p>
        </div>

        <p className="text-xl">{things.description}</p>

        {/* Color Selection */}
        <p className="text-gray-600">Select Colors</p>
        <div className="space-x-3">
          {things.color.map((item: any, index: any) => (
            <button
              key={index}
              onClick={() => setcartPro({ ...cartPro, color: item })}
              className="w-[37px] h-[37px] rounded-full active:outline"
              style={{ backgroundColor: item }}
            ></button>
          ))}
        </div>

        {/* Size Selection */}
        <p className="text-gray-700 lg:text-xl">Select Size</p>
        <div className="space-x-3">
          {things.size.map((item: any, index: any) => (
            <button
              key={index}
              onClick={() => setcartPro({ ...cartPro, size: item })}
              className="w-[70px] h-[37px] rounded-[16px] font-normal active:outline bg-gray-200 hover:bg-gray-500"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Quantity Selection */}
        <div className="flex space-x-4 bg-gray-300 w-[100px] h-[37px] rounded-[16px] justify-center items-center mt-3">
          <button
            onClick={() => setcartPro({ ...cartPro, qty: cartPro.qty > 1 ? cartPro.qty - 1 : 1 })}
            className="hover:bg-gray-400 rounded-full"
          >
            <Minus />
          </button>
          <span className="w-4">{cartPro.qty}</span>
          <button
            onClick={() => setcartPro({ ...cartPro, qty: cartPro.qty + 1 })}
            className="hover:bg-gray-400 rounded-full"
          >
            <Plus />
          </button>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => dispatch(add(cartPro))}
          className="bg-black mt-3 text-white w-[200px] lg:w-[300px] h-[37px] rounded-[16px] hover:bg-gray-500 active:bg-blue-200"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

































// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { IoIosStar } from "react-icons/io";
// import { Plus, Minus } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "@/app/Redux/features/cart";
// import { useParams } from "next/navigation";

// let rating = [
//   <IoIosStar key={1} />,
//   <IoIosStar key={2} />,
//   <IoIosStar key={3} />,
//   <IoIosStar key={4} />,
//   <IoIosStar key={5} />,
// ];

// export default function SlugPage() {
//   const params = useParams(); 
//   const products = useSelector((state: any) => state.item);

//   if (!params?.slug) return <p>Loading...</p>; 
//   const things: any = products.find((item: any) => item.slug === params.slug);
//   // if (!things) return <p>Product not found</p>; 

//   const dispatch = useDispatch();
//   const [cartPro, setcartPro] = useState({
//     id: things.id,
//     title: things.title,
//     price: things.price,
//     img_url: things.img_url,
//     size: things.size,
//     color: things.color[0],
//     qty: things.qty,
//     discount: things.discount,
//     description: things.description,
//   });

//   return (
//     <div className="mt-5 flex flex-col lg:flex-row justify-around">
//       <div className="sm:space-y-3  w-full space-x-2  sm:space-x-0 p-2 sm:p-0 lg:w-[200px] flex justify-start items-center lg:flex-col">
//         <Image
//           src={things.img_url[1]}
//           alt={things.title}
//           width={100}
//           height={100}
//           className="w-full"
//         />
//         <Image
//           src={things.img_url[0]}
//           alt={things.title}
//           width={100}
//           height={100}
//           className="w-full"
//         />
//         <Image
//           src={things.img_url[1]}
//           alt={things.title}
//           width={100}
//           height={100}
//           className="w-full "
//         />
//       </div>

//       <div className="space-y-4 lg:w-[500px] flex justify-start items-center flex-col mt-4 sm:mt-0">
//         <Image
//           src={things.img_url[0]}
//           alt={things?.title}
//           width={100}
//           height={100}
//           className="w-full"
//         />
//       </div>

//       <div className="space-y-4 p-3 sm:p-0 mt-3 sm:mt-0 lg:w-[500px]">
//         <h1 className="text-3xl font-extrabold lg:text-4xl">{things.title}</h1>
//         <p className="flex text-xl text-yellow-500 justify-start items-center">{rating}</p>

//         <div className="flex space-x-3 text-2xl">
//           <p className="font-bold">{cartPro.price * cartPro.qty} </p>
//           <p className="font-bold text-gray-400 line-through">
//             {cartPro.discount > 0 &&
//               (cartPro.price - (cartPro.price * cartPro.discount) / 100) * cartPro.qty}
//           </p>
//         </div>

//         <p className="text-xl">{things.description}</p>

//         <p className="text-gray-600">Select Colors</p>
//         <div className="space-x-3">
//           {things.color.map((item: any, index: any) => {
//             return (
//               <button
//                 key={index}
//                 onClick={() => setcartPro({ ...cartPro, color: item })}
//                 className="w-[37px] h-[37px] rounded-full active:outline"
//                 style={{ backgroundColor: item }}
//               ></button>
//             );
//           })}
//         </div>

//         <p className="text-gray-700 lg:text-xl">Select Size</p>
//         <div className="space-x-3">
//           {things.size.map((item: any, index: any) => {
//             return (
//               <button
//                 key={index}
//                 onClick={() => setcartPro({ ...cartPro, size: item })}
//                 className="w-[70px] h-[37px] rounded-[16px] font-normal active:outline bg-gray-200 hover:bg-gray-500"
//               >
//                 {item}
//               </button>
//             );
//           })}
//         </div>

//         <div className="flex space-x-4 bg-gray-300 w-[100px] h-[37px] rounded-[16px] justify-center items-center mt-3">
//           <button onClick={() => setcartPro({ ...cartPro, qty: cartPro.qty <= 1 ? 1 : --cartPro.qty })
//             }
//             className="hover:bg-gray-400 rounded-full"><Minus />
//           </button>
//           <span className="w-4">{cartPro.qty}</span>
//           <button
//             onClick={() => setcartPro({ ...cartPro, qty: ++cartPro.qty })}
//             className="hover:bg-gray-400 rounded-full"
//           >
//             <Plus />
//           </button>
//         </div>
//         <Button
//           onClick={() => dispatch(add(cartPro))}
//           className="bg-black mt-3 text-white w-[200px] lg:w-[300px] h-[37px] rounded-[16px] hover:bg-gray-500 active:bg-blue-200">
//           Add To Cart
//         </Button>
       
//       </div>
//     </div>
//   );
// }




























// "use client"
// import  Image  from 'next/image';
// import React, { useState } from 'react';
// import { IoIosStar } from 'react-icons/io';
// import { Plus, Minus } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useDispatch, useSelector } from 'react-redux';
// import { add } from '@/app/Redux/features/cart';

// let rating = [<IoIosStar key={1} />,
// <IoIosStar key={2} />,
// <IoIosStar key={3} />,
// <IoIosStar key={4} />,
// <IoIosStar key={5} />]


// export default function slug ({params}:  {params:{slug:string}} ) {
//   const products = useSelector((state:any) => state.item)
//   const things:any = products.find((item:any) => item.slug == params.slug)


//   const dispatch = useDispatch();
//   const [cartPro,setcartPro] = useState(
//     {
//     id: things.id,
//     title: things.title,
//     price: things.price,
//     img_url: things.img_url,
//     size: things.size,
//     color:things.color[0],
//     qty: things.qty,
//     discount: things.discount,
//     description: things.description,
//     })
    
// return (
//     <div className='mt-5 flex justify-around'>
//       <div className='space-y-4 w-[200px] flex justify-start items-center flex-col  '>
//         <Image src={things.img_url[1]} alt={things.title} width={100} height={100} className='w-full'></Image>
//         <Image src={things.img_url[0]} alt={things.title} width={100} height={100} className='w-full'></Image>
//         <Image src={things.img_url[1]} alt={things.title} width={100} height={100} className='w-full'></Image>
//       </div>


//       <div className='space-y-4 w-[500px] flex justify-start items-center flex-col '>
//       <Image src={things.img_url[0]} alt={things?.title} width={100} height={100} className='w-full'></Image>
//       </div>

//       <div className='space-y-4 w-[500px]'>
//         <h1 className='text-sm font-bold lg:text-3xl'>{things.title}</h1>
//         <p className="flex text-yellow-500 justify-start items-center" >{rating}</p>
 
//         {/* <div className = "flex space-x-3">
//         <p className="font-bold">{cartPro.price * cartPro.qty} 
//         <span className="font-bold space-y-5 text-gray-500 line-through"> 
//         {cartPro.discount > 0 && (cartPro.price-(cartPro.price*cartPro.discount) /100)* cartPro.qty} </span></p>
//         </div>  */}

//             <div className='flex space-x-3'>
//              <p className='font-bold'>{cartPro.price * cartPro.qty} </p>
//              <p className='font-bold text-gray-400 line-through'>
//               {cartPro.discount >0 && (cartPro.price -(cartPro.price*cartPro.discount) / 100 )* cartPro.qty} </p>
//              </div>
             

         
//           <p>{things.description}</p>

//           <p className='text-gray-600'>Select Colors</p>
//           <div className='space-x-3'>
//             {
//               things.color.map((item:any,index:any)=>{
//              return <button key={index} onClick={()=>setcartPro({...cartPro,color:item})} className='w-[37px] h-[37px] rounded-full active:outline'
//              style={{backgroundColor: item}}
//              ></button>

//               })
//             }
//           </div>

//           <p className='text-gray-700 '>Select Size</p>
//           <div className='space-x-3'>
//             {
//               things.size.map((item:any,index:any)=>{
//              return <button key={index} onClick={()=>setcartPro({...cartPro,size:item})} className='w-[70px] h-[37px] rounded-[16px] font-normal active:outline bg-gray-200 hover:bg-gray-500'
//              >{item}</button>

//               })
//             }
//           </div>

//           <div className='flex space-x-4 bg-gray-300 w-[100px] h-[37px] rounded-[16px] justify-center items-center mt-3 '>
//           <button onClick={() => setcartPro({ ...cartPro,qty:cartPro.qty <= 1? 1 : --cartPro.qty})} className='hover:bg-gray-400 rounded-full'> <Minus/></button>
//           <span>{cartPro.qty}</span>
//           <button onClick={(() => setcartPro({ ...cartPro,qty:++cartPro.qty}))} className='hover:bg-gray-400 rounded-full '><Plus/></button>
         
//           </div>
//           <Button onClick={()=>dispatch(add(cartPro))} className='bg-black mt-3 text-white w-[200px] lg:w-[300px] h-[37px] rounded-[16px] hover:bg-gray-500 active:bg-blue-200 '>Add To Cart</Button>

//     </div>
//     </div>
//   )
// }

