import Image from 'next/image';
import React from 'react';

const Topnews = ({topNews}) => {
    console.log(topNews)
    const firstNews= topNews[0]
    // console.log(firstNews)
    const otherNews= topNews.slice(1,4)
    console.log(otherNews)

    return (
        <>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
   <Image height={300} width={300} src={firstNews.
imageUrl
} ></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstNews.category}</h2>
    <p>{firstNews.description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* other news map system */}
        </>


    );
};

export default Topnews;