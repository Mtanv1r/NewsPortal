import React from 'react';
import { info } from 'next/dist/build/output/log';
import Topnews from '../topNews/Topnews';
import Newscard from '../newscard/Newscard';



const Main = async () => {
    // data fetching part 
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const Info= await res.json()

    const topNews=Info.data[0].articles
    const otn = Info.data.slice(1);
    console.log(otn)







    return (
        <div  className="grid grid-cols-3 max-w-7xl mx-auto">
            {/* news section */}
             <div className="bg-violet-600 col-span-2 min-h-screen "> 
                <Topnews   topNews={topNews}></Topnews>
                {otn.map((elm,idx:number)=>(<h1  key={idx} className="border-2 border-pink-600 ">
                    {elm.title}
                    <div>
                     {elm.articles.map((n,idx:number)=><Newscard key={idx}></Newscard>)}
                    {/* <Newscard></Newscard> */}
                    </div>
                    
                </h1>
                ))}
                 </div>
        {/* most read section */}
        <div className="bg-red-300 col-span-1 min-h-screen">

        </div>
        </div>
    );
};

export default Main;