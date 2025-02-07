import Hero from "@/components/hero";
import Fonts from "@/components/fonts";
import Dstyle from "./brands/page";
import CustomerCarousel from "@/components/customers-reviews";
import { NavigationMenuDemo } from "@/components/navigationBar";
import Products from "./products-detail/page";
import Sells from "./products-detail/top-sell";
// import Sell from "./(group)/arrivals/sell";
// import Shirt from "./(group)/arrivals/shirt";
// import Product from "@/components/arrivals";


export default function Home() {
  return (
    <div>
      <Hero />
      <Fonts />
      <Products />
      <Sells />
      <Dstyle />
      <CustomerCarousel />
      <NavigationMenuDemo />
  
      
      {/* <Sell /> */}
      {/* <Shirt/> */}
      {/* <Product/> */}
    </div>
  );
}
