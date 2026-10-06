import { console } from 'next/dist/compiled/@edge-runtime/primitives';
import { Elms_Sans } from 'next/font/google';
import React from 'react';

const Category = async ({params}) => {

    const {categoryId} = await params
    // console.log(categoryId)
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data= await res.json()
    const CategoryNews=data.data









    return (
        <div>
         <h1 className="font-bold text-red-500">{data.title}</h1>
         <p className="grid grid-cols-3 gap-7 p-15">{CategoryNews.map((elm,idx)=>(

  <article className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white" key={idx}>
      <a
        href={elm.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <div className="relative aspect-video overflow-hidden bg-neutral-100">
          <img
            src={elm.imageUrl}
            alt={elm.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {elm.isLive && (
            <span className="absolute left-3 top-3 rounded bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
              লাইভ
            </span>
          )}
        </div>
 
        <div className="flex flex-1 flex-col gap-2 p-4">
          <span className="text-sm font-medium text-blue-700">
            {elm.category}
          </span>
          <h2 className="text-lg font-bold leading-snug text-neutral-900 group-hover:underline">
            {elm.title.trim()}
          </h2>
          <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {elm.description}
          </p>
         
        </div>
      </a>
    </article>



         ))}</p>
        </div>
    );
};

export default Category;