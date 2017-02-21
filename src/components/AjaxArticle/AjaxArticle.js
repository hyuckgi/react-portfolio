import React, { Component } from 'react';
import { AjaxComments } from '../';

import './AjaxArticle.css';


class AjaxArticle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            postInfo : {
                title : null,
                body : null,
                comments : []
            },
            animate : false,
            direction : 'left'
        }
    }

    componentWillReceiveProps(nextProps) {
        const { title, body, comments} = nextProps;

        if(this.props.postId !== nextProps.postId){
            const direction = this.props.postId < nextProps.postId ? "left" : "right";

            this.setState({
                direction,
                animate : true
            });

            setTimeout(()=>{
                this.setState({
                    postInfo : {
                        title, body, comments
                    },
                    animate : false
                })
            },300);
            return;
        }
        this.setState({
            postInfo : {
                title, body, comments
            }
        })
    }

    render(){
        const { title, body, comments } = this.state.postInfo;
        const { animate, direction } = this.state;

        const animation = animate
                          ? (direction === 'left' ? 'bounceOutLeft' : 'bounceOutRight')
                          : (direction === 'left' ? 'bounceInRight' : 'bounceInLeft');

        if(title===null) return null;

        return(
            <div className={`ajax_article animate ${animation}`}>
                <h1>{title}</h1>
                <p>
                    {body}
                </p>
                <AjaxComments comments={comments}/>
            </div>
        );
    }
}

export default AjaxArticle;
