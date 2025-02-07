"use client"
import { StaticImageData } from "next/image";

export type Iproduct = {
    id:number;
    title:string;
    price:number;
    img_url? :string[] | StaticImageData | string; 
    category:string;
    description:string;
    size: string[];
    color: string[];
    qty: number;
    discount?: number;
    slug: string;
};

export type cart ={
    id:number;
    uid: string | number | undefined;
    title:string;
    price:number;
    img_url? :string[] | StaticImageData | string; 
    size: string[];
    color: string[];
    qty: number;
    discount?: number;
    slug: string;
};



export default Iproduct