import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.email}</p>
        </div>
    );
};

export default FriendDetail;