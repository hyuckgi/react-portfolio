import React, { Component } from 'react';
import { MemoList, MemoWrite } from '../../components';

import memopad from "../../../img/memopad.jpg";

class MemoPad extends Component {

    render() {
        let memopadStyle = {
            "position" : "relative",
            "backgroundImage" : 'url('+ memopad +')',
            "backgroundPosition" : "center center",
            "backgroundSize" : "cover",
            "minHeight" : "500px",
            "padding" : "5%"
        }

        return(
            <div className="memopad" style={memopadStyle}>
                <MemoWrite />
                <MemoList />
            </div>
        );
    }
}

export default MemoPad;
