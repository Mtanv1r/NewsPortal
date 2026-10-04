import React from 'react';
import Right from './part/Right';
import Left from './part/Left';

const News = () => {
    return (
        <div className="grid-rows-8  gap-3.5">
            <div className="flex justify-evenly items-center bg-accent">

                <Right></Right>
                <Left></Left>

            </div>
            <h1>item2</h1>
            <h1>item3</h1>
            <h1>item4</h1>
            <h1>item5</h1>
            <h1>item6</h1>
            <h1>item7</h1>
            <h1>item8</h1>
        </div>
    );
};

export default News;