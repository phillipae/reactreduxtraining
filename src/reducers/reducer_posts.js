import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';


export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_POST:
        // if we did this with ES5
        // const post = action.payload.data;
        // const newState = { ...state };
        // newState[post.id] = post;
        // return newState;

        // add to state:
        // key: whatever is at action.payload.data.id
        // value: action.payload.data
        return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}