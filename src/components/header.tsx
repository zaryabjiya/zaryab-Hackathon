"use client"
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { SheetSide } from "./sheet";
import { useAppSelector } from "@/app/Redux/hook";
import { useSelector } from "react-redux";
import { Sheet } from "./ui/sheet";


export default function Header() {
    const cart = useSelector((state:any)=> state.cart)

  return (
    <header className="flex mt-0 justify-between items-center w-full h-[60px] border-b md:h-[90px] pr-2 max-w-screen-2xl mx-auto bg-white">
       {/* <Alert /> */}
        <div className="flex justify-center items-center ">
            <span>
            <SheetSide />
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold  pl-2">SHOP.CO</h1>
        </div>
        <ul className="hidden sm:block text-xl">
            <li className="space-x-5 flex ml-4 mt-2 items-center">
                
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Product</Link>                                                              
                <Link href={"/brands"}>Brands</Link>
                <Link href={"/casual"}>Casual</Link>


            </li>
        </ul>

        <div className="ml-14 flex justify-center items-center">
                <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> 
               <span className="text-xl hidden lg:block"> <FaSearch />  </span>
                <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] outline-none  w-full h-full rounded-full ml-2 hidden lg:block"/></div>
                
            </div>
            <div className="flex justify-between items-center gap-5 pr-2 ">
                <span className="text-xl  lg:hidden">
            <FaSearch />
            </span>

            <span className="text-xl relative ">
            <Link href={"/cart"}>
                <LuShoppingCart className="text-3xl"/>
                {cart.length > 0 && (
                    <span className="absolute top-[-5px] bg-red-600 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0;">{cart.length}</span>
                )}
                
                </Link>
                </span>
            
            <span className=" text-xl hidden lg:block">
        
            <CgProfile/>
            {/* {cart.length > 0 && (
                    <span className="absolute top-[-5px] bg-red-600 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0;">{cart.length}</span>
                )} */}
            </span>
          
            </div>
         
     </header>

) }



// import Link from "next/link";
// import { FaSearch } from "react-icons/fa";
// import { LuShoppingCart } from "react-icons/lu";
// import { CgProfile } from "react-icons/cg";
// import { SheetSide } from "./sheet";
// import {NavigationMenuDemo} from "./navigationBar";
// import Alert from "./Alert";

// export default function Header() {
//   return (
//     <div className="z-10 top-0 w-full">
//     <Alert />
//     <header className="flex  justify-between items-center w-full h-[60px] border-b md:h-[90px] pr-2 max-w-screen-2xl mx-auto bg-white">
//         <div className="flex justify-center items-center ">
//             <SheetSide/>
//             <h1 className="text-2xl md:text-4xl font-extrabold  pl-2">SHOP.CO</h1>
//         </div>
//         <ul className="hidden sm:block text-xl">
//             <li className="space-x-5 flex ml-4 mt-2 items-center">
//                 <Link href={""}>
//                 <NavigationMenuDemo/>
//                 </Link>
//                 <Link href={"/"}>On sale</Link>
//                 <Link href={"/casual"}>Casual</Link>
//                 <Link href={"/products"}>New arrivals</Link>                                                              
//                 <Link href={"/brands"}>Brand</Link>
//             </li>
//         </ul>

//         <div className="ml-14 flex justify-center items-center">
//                 <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> 
//                <span className="text-xl hidden lg:block"> <FaSearch />  </span>
//                 <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] outline-none  w-full h-full rounded-full ml-2 hidden lg:block"/></div>
                
//             </div>
//             <div className="flex justify-between items-center gap-5 pr-2 ">
//                 <span className="text-xl  lg:hidden">
//             <FaSearch />
//             </span>

//             <span className="text-xl  ">
//             <Link href={"/cart"}>
             
//                 <LuShoppingCart /></Link>
//                 </span>

//             <span className=" text-xl">
//             <CgProfile/>
//             </span>
//             </div>
            
//      </header>
//      </div>
     
//   );
// }