import { console } from 'next/dist/compiled/@edge-runtime/primitives';
import React from 'react';

const Category = async ({params}) => {

    const {categoryId} = await params
    console.log(categoryId)





    return (
        <div>
            <h1>this is category page</h1>
        </div>
    );
};

export default Category;