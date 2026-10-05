import React from 'react';
import News from '../news/News';
import MostReaded from '../MostReaded/MostReaded';
import { info } from 'next/dist/build/output/log';



const Main = async () => {
    // data fetching part 
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const Info= await res.json()

    const topNews=Info.data[0].articles
    console.log(topNews)




    return (
        <div  className="grid grid-cols-3 max-w-7xl mx-auto">
            {/* news section */}



            
             <div className="bg-violet-600 col-span-2 min-h-screen"> 
                            
                 </div>
        {/* most read section */}
        <div className="bg-red-300 col-span-1 min-h-screen">

        </div>
        </div>
    );
};

export default Main;