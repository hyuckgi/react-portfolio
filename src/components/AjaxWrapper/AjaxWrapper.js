import React from 'react';

import './AjaxWrapper.css';


const AjaxWrapper = ({ children }) => {
    return (
        <div className="ajax_wrapper">
            {children}
        </div>
    );
};

export default AjaxWrapper;
