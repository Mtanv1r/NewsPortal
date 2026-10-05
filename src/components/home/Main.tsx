import React from 'react';
import { info } from 'next/dist/build/output/log';
import Topnews from '../topNews/Topnews';
import MostReaded from '../mostReaded/MostReaded';




const Main = async () => {
    // data fetching part 
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const Info= await res.json()

    const topNews=Info.data[0].articles
    const otn = Info.data.slice(1);
    







    return (
        <div  className="grid grid-cols-3 max-w-7xl mx-auto">
            {/* news section */}
             <div className=" col-span-2 min-h-screen "> 
                <Topnews   topNews={topNews}></Topnews>
                {otn.map((elm,idx:number)=>(<h1  key={idx} className="border-2 border-pink-600 ">
                    {elm.title}
                    <div className="grid grid-cols-3 gap-5">
                     {elm.articles.map((n,idx:number)=>(
                        <div key={idx} >
<article className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md" key={idx}>

  {/* Image */}
  <img
    src={n.imageUrl}
    alt={n.title}
    className="h-48 w-full object-cover"
  />

  {/* Content */}
  <div className="p-4">

    {/* Category */}
    <span className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
      {n.category}
    </span>

    {/* Title */}
    <h2 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
      {n.title}
    </h2>

    {/* Description */}
    <p className="line-clamp-3 text-sm leading-5 text-gray-600">
      {n.description}
    </p>

  </div>
</article>  
                        </div>
                       
             ))}
                    </div>
                    
                </h1>
                ))}
                 </div>
        {/* most read section */}
        <div className="bg-red-300 col-span-1 min-h-screen">
            <MostReaded></MostReaded>
        </div>
        </div>
    );
};

export default Main;