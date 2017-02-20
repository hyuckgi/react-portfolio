import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memoRemove } from '../../actions';
import { Memo } from '../index';


class MemoList extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(id, index){
        this.props.memoRemove(id, index);
    }

    render() {
        const mapToComponents = memos => {
            return memos.map((memo, i) => {
                return (<Memo
                            data={memo.content}
                            key={memo.id}
                            id={memo.id}
                            index={i}
                            onRemove={this.handleRemove}
                />);
            });
        };

        return (
            <div>
                {mapToComponents(this.props.memos)}
            </div>
        );
    }
}

MemoList.propTypes = {
    memos : React.PropTypes.array
};

MemoList.defaultProps = {
    memos : []
};

const mapStateToProps = (state) => {
    return {
        memos : state.memos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        memoRemove : (id, index) => {dispatch(memoRemove(id, index));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoList);
