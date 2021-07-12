import * as types from '../utils/actionTypes';

const SearchTextReducer = (state, action) => {
    switch (action.type) {
        case types.STORE_QUERY_TEXT:
            return action.payload.text;

        default:
            return state;
    }
};

export default SearchTextReducer;
