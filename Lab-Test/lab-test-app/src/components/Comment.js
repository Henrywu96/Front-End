import React from 'react';
import LikeButton from './LikeButton';
import Timer from './Timer';

const Comment = (props) => {
    return (
        <>
            <Timer /> <b>{props.comment}</b> <LikeButton />
        </>
        
    );
}

export default Comment;