import React from 'react';

const MostReaded = async () => {
    // fetching most readed section api
    const res=await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data=await res.json()
    const mostR=data.data
    return (
        <div>
            {mostR.map((n,idx)=>(
                <div className="flex justify-evenly items-center font-bold text-black" key={idx}>
                     <h1 >{n.rank}</h1> 
                     <h1 >{n.title}</h1>
                </div>
                
            ))}            
        </div>
    );
};

export default MostReaded;