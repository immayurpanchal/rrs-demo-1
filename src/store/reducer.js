import { GET_CAPTION, SET_PHOTO_DETAIL } from './actionTypes';

const initialState = {
    caption: '',
    display_src: '',
}

const reducer = (state = initialState, action) => { 
    switch (action.type) { 
        case GET_CAPTION:
            return {
                ...state,
                caption: action.caption
            };
        case SET_PHOTO_DETAIL:
            return {
                ...state, 
                display_src: action.payload.display_src,
                caption: action.payload.caption
            };
        default: 
            return state;
    }
}

export default reducer; 