import React from 'react';
import './AjaxComment.css';

const AjaxComment = ({name, body}) => {
    return(
        <li className="comment">
            <p>
                <b>{name}</b> {body}
            </p>
        </li>
    );
};

export default AjaxComment;
