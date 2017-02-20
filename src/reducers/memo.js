import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = [
    {
        id : new Date().getTime(),
        content : "make your memoList"
    }
];

export default function memos(state = initialState, action) {
    switch (action.type) {
        case types.MEMO_POST:
            return update(state, {
                $push : [
                    {
                        id : action.id,
                        content : action.content
                    }
                ]
            });
        case types.MEMO_REMOVE:
            console.log(action);
            return update(state, {
                $splice : [
                    [action.index, 1]
                ]
            });
        default:
            return state;
    }
}
