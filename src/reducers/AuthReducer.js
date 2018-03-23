import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_CHANGE_LOADER
} from '../actions/types';

const INITIAL_STATE = {
    email : '',
    password: '',
    user: null,
    error: '',
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', isLoading: false };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case LOGIN_CHANGE_LOADER:
            current = state.isLoading;
            return { ...state, isLoading: !current };
        default:
            return state
    }
}