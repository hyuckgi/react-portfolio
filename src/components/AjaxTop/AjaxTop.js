import React from 'react';
import { Button } from 'semantic-ui-react';
import './AjaxTop.css';

const AjaxTop = ({onClick, postId, disabled}) => (
    <div className="navigate clearfix">
        <Button
            color="linkedin"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={
                () => onClick('PREV')
            }
            disabled={disabled}
        />
        <div className="navigate-page-num">
            {postId}
        </div>
        <Button
            color="linkedin"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="navigate-right-button"
            onClick={
                () => onClick('NEXT')
            }
            disabled={disabled}
        />
    </div>
);

export default AjaxTop;
