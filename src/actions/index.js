import {
    MEMO_POST,
    MEMO_REMOVE
} from './ActionTypes';


// MEMO POST
export function memoPost(id, content){
    console.log(id, content);
    return {
        type: MEMO_POST,
        id,
        content
    };
}


// MEMO LIST
export function memoRemove(id, index){
    return {
        type: MEMO_REMOVE,
        id,
        index
    };
}
