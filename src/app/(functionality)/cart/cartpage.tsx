"use client"



import { AiFillDelete } from "react-icons/ai";

import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus } from "lucide-react";
import { delItem, addition, subtraction } from "@/app/Redux/features/cart";


function Cartpage() {
    const cartItem = useSelector((state:any)=>state.cart)
    const dispatch = useDispatch();
  return (
    <div>
      {
        cartItem.length >= 1 && 
        cartItem.map((things:any,i:any)=>{
            return(
                <div key={i} className="flex top-19  lg:w-[650px] p-4 rounded-[16px] border  justify-between">
                    <div className="flex">
                    <Image src={things.img_url[0]} alt={things.title} width={100} height={100} ></Image>
                    <div className="flex flex-col ml-3">
                        <span>Size:{things.size[0]}</span>
                        <span>Color:{things.color[0]}</span>
                        {/* <span>${items.price}</span> */}
                        <p className="font-bold" key={i}>${things.discount > 0 ? (things.price - 
                       (things.price * things.discount) / 100) * things.qty : things.price * things.qty}</p>
                    </div>
                    </div>
                    <div className="relative">
                         {/* btn */}
                     <span> <AiFillDelete onClick={()=>dispatch(delItem(things.uid))} className="text-red-600 cursor-pointer absolute right-2 top-1"/>
                     </span>

                     <div className='flex justify-start items-center pt-10 '>
                     <button 
                     onClick={()=>dispatch(subtraction(things.uid))}
                     className='w-10'><Minus/></button>
                     <span className='w-4'>{things.qty}</span>
                     <button
                       onClick={()=>dispatch(addition(things.uid))}
                     className='w-10'><Plus/></button>
                     </div>
                    </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default Cartpage



























// import { Minus, Plus } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// import { MdDelete } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import {addition, delItem, subtraction} from  "../Redux/features/cart";
// import { RootState } from "@reduxjs/toolkit/query";

// const Cartpage = () => {
 
//   const dispatch = useDispatch()

//   const cartArray  = useSelector((state:any ) => state.cart);

  
//   return (
//     <>
//          {/* start cart */}
//          <div className="w-[95%] sm:w-full flex flex-col md:flex-row justify-center items-start gap-6 mt-4">
//          {cartArray.length >= 1 && 
//                  <div className="w-full lg:w-[700px] space-y-4 border rounded-[20px] pt-2 ">
//                    {cartArray.map((data:any,index:any)=>{
//                     return (
//                      <div className="flex justify-between border-b px-3 pb-3" key={data.id}>
//                       <div className="flex ">
//                       <div>
//                             <Image src={data.image} width={100} height={100}  alt={data.name}></Image>
//                            </div>
//                            <div className="ml-3">
//                                <h1 className="font-bold" key={index}>{data.name}</h1>
//                                <p key={index}>Size:{data.size}</p>
//                                <p key={index}>Color:{data.color}</p>
//                                <p className="font-bold" key={index}>${data.discount > 0 ? (data.price - (data.price * data.discount) / 100) * data.qty : data.price * data.qty}</p>
//                            </div>
//                       </div>
//                            <div className="relative ">
//                            <button onClick={()=>dispatch(delItem(data.uuid))}> <MdDelete className="absolute top-0 text-xl right-0 sm:right-3 text-red-500"/></button>
//                              <div className="md:w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 absolute bottom-0 right-0 ">
//                              <button onClick={()=>dispatch(subtraction(data))}><Minus/></button>
//                             {data.qty}
//                              <button onClick={()=>dispatch(addition(data))}><Plus/></button>
//                            </div>
//                           </div>
//                      </div>
//                     )
//                    })} 
//                  </div>
//                   }
//          </div>
      
   
//     </>
//  )
// }

// export default Cartpage;















