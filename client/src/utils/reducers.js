import { useReducer } from 'react';
import {
    SAVE_CONCERT,
    REMOVE_CONCERT,
    LIKE_ARTIST,
    ADD_REVIEW,
    LIKE_VENUE,
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
            let newState = state.concerts.filter((concert) => {
                return concert._id !== action._id;
            });
            return {
                ...state,
                concerts: newState,
            };

        case LIKE_ARTIST:
            return {
                ...state,
                artists: [...action.artists],
            };

        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...action.reviews],
            };

        case LIKE_VENUE:
            return {
                ...state,
                venues: [...action.venues],
            };

        case ADD_FRIEND:
            return {
                ...state,
                follow: [...action.follow],
            };

        // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
        // This saves us from a crash.
        default:
            return state;
    }
};

export function useUserInfoReducer(initialState) {
    return useReducer(reducer, initialState);
}