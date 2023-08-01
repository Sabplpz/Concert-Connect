import { useReducer } from 'react';
import {
    SAVE_CONCERT,
    REMOVE_CONCERT,
    LIKE_ARTIST,
    REVIEW_ARTIST,
    LIKE_VENUE,
    REVIEW_VENUE,
    ADD_FRIEND,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_CONCERT:
        return {
            ...state,
            concerts: [...action.concerts]
        };

        case REMOVE_CONCERT:
        return {
            ...state,
            // TODO:
        };

        case LIKE_ARTIST:
        return {
            ...state,
            // TODO:
        };

        case REVIEW_ARTIST:
        return {
            ...state,
            // TODO:
        };

        case LIKE_VENUE:
        return {
            ...state,
            // TODO:
        };

        case REVIEW_VENUE:
        return {
            ...state,
            // TODO:
        };

        case ADD_FRIEND:
        return {
            ...state,
            // TODO:
        };

        // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
        // This saves us from a crash.
        default:
        return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}