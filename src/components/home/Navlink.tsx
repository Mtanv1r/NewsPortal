import { Link } from '@heroui/react';
import React from 'react';



//type declaration 
interface Ielm {
scrapable: boolean
slug:string
title: string
topicId: null | string
url: string

}









const Navlink = async () => {
    //data fetching
    const res=await fetch("https://news-api-v2.vercel.app/api/categories")
    const data=await res.json()
 
    const navs=data.data
  

    return (
        <div className="flex items-center justify-center gap-5 bg-amber-200 container mx-auto">
            <Link href={"/"}>বাড়ি</Link>
            {navs.slice(0,7).map((elm:Ielm , idx:number)=><Link href={`/category/${elm.slug}`} key={idx}>{elm.title}</Link>)}
        </div>
    );
};

export default Navlink;