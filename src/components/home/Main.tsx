import React from 'react';
import News from '../news/News';
import MostReaded from '../MostReaded/MostReaded';



const Main = async () => {
    // data fetching part 
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const data= await res.json()
    console.log(data.data[0].articles[0].description)



    return (
        <div  className="grid grid-cols-3 max-w-7xl mx-auto">
            {/* news section */}
             <div className="bg-violet-600 col-span-2 min-h-screen"> 
                <News></News>
                
                 </div>
        {/* most read section */}
        <div className="bg-red-300 col-span-1 min-h-screen">

            <MostReaded></MostReaded>
        </div>
        </div>
    );
};

export default Main;