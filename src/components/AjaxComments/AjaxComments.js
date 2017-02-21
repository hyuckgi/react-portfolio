import React from 'react';
import { AjaxComment } from '../';
import './AjaxComments.css'



const AjaxComments = ({comments}) => {

    const commentList = comments.map((comment, index) => {
        return (
            <AjaxComment
                name={comment.email.split('@')[0]}
                body={comment.body}
                key={index}
            />
        );
    })
    return (
        <ul className="comment_list">
            {commentList}
        </ul>
    );
};


export default AjaxComments;
