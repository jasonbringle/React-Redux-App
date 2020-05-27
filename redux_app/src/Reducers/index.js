import { FETCHING_JOKE_START, FETCHING_JOKE_SUCCESS, FETCHING_JOKE_FAILURE } from '../Actions';

const initialState = {
    chuck: null,
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_JOKE_START:
            return {
                ...state,
                chuck: null,
                isFetching: true,
                error: ""

            };
        case FETCHING_JOKE_SUCCESS:
            return {
                ...state,
                chuck: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCHING_JOKE_FAILURE:
            return {
                ...state,
                chuck: null,
                isFetching: false,
                error: ``
            };
            default:
                return state;
    }
}
