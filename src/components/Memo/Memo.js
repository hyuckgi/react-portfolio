import React from 'react';
import './Memo.css';
import TimeAgo from 'react-timeago';


const Memo = ({ data, index, onRemove, id}) => {

    const handleRemove = (id, index) => {
        onRemove(id, index)
    };

    const userAppName = () => {
        return window.navigator.appName;
    }

    return (
        <div className="container memo" >
            <div className="card">
                <div className="info">
                    <a className="username">{userAppName()}</a> wrote <TimeAgo date={id} />
                    <div className="option-button">
                        <a className='dropdown-button' onClick={handleRemove} title="REMOVE MEMO">
                            <i className="material-icons icon-button">delete_forever</i>
                        </a>
                    </div>
                </div>
                <div className="card-content">
                    { data }
                </div>
            </div>
        </div>
    );
};




export default Memo;
