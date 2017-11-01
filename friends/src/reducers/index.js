import {GET_FRIENDS, ADD_FRIEND} from '../actions';
import {combineReducers} from 'redux';


const friendsReducer = (friends = [],action) => {
    switch (action.type){
        case GET_FRIENDS:
            return action.payload.data;
        case ADD_FRIEND:
            let newFriends = friends.slice(0);
            newFriends = action.payload.data;
            return newFriends;
        default:
            return friends;
    }
}

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;