import { FETCHING_CAR_START, FETCHING_CAR_SUCCESS, FETCHING_CAR_FAILURE } from '../Actions';

const initialState = {
    cars: null,
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_CAR_START:
            return {
                ...state,
                cars: null,
                isFetching: true,
                error: ""

            };
        case FETCHING_CAR_SUCCESS:
            return {
                ...state,
                cars: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCHING_CAR_FAILURE:
            return {
                ...state,
                cars: null,
                isFetching: false,
                error: `&{}`
            };
            default:
                return state;
    }
}
