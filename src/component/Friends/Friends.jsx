import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>These are my friends</h1>
        </div>
    );
};

export default Friends;