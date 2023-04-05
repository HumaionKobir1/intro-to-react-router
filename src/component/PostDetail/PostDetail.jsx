import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const {id, title, useId, body} = post;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Details about your post of: {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;