import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { memoPost } from '../../actions';

import './MemoWrite.css';

class MemoWrite  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            contents : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleChange(e){
        this.setState({
            contents : e.target.value
        });
    }

    handlePost(){
        let content = this.state.contents;
        let timestamp = new Date().getTime();
        this.props.memoPost(timestamp, content);
        this.setState({
            id : "",
            contents : ""
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
                        <a onClick={this.handlePost}>POST</a>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        memoPost : (timestamp, content) => { dispatch(memoPost(timestamp, content));}
    };
};
export default connect(undefined, mapDispatchToProps)(MemoWrite);
