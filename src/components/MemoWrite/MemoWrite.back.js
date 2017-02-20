import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";

import './MemoWrite.css';

class MemoWrite  extends Component {
    constructor(props){
        super(props);

        this.state = {
            contents : ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target.value);
        this.setState({
            contents : e.target.value
        });
    }

    render(){
        return (
            <div className="container write">
                <div className="card">
                    <div className="card-content">
                        <textarea
                            className="materialize-textarea"
                            placeholder="Write down your memo"
                            value={this.state.contents}
                            onChange={this.handleChange}></textarea>
                    </div>
                    <div className="card-action">
                        <a>POST</a>
                    </div>
                </div>
            </div>
        );
    }
}

MemoWrite.propTypes = {
    onPost : React.propTypes.func
}

MemoWrite.defaultProps = {
    onPost : (contents) => { console.log("post function not defined");}
}

const mapStateToProps = (state) => {
    return{
        contents :
    }
}

export default MemoWrite;
