import {CREATE_USER, CREATE_USER_ERROR, LOGIN_IN, LOGIN_IN_ERROR, LOGIN_OUT} from "../constants/actions/actions_const";
import {EMPTY_STRING} from "../constants/api/common";
import {getUsersByID} from "../api/dumMyApi";
import produce from "immer";

const initialState = {
    userId: EMPTY_STRING,
    userFirstName: EMPTY_STRING,
    userPhotoURL: EMPTY_STRING
};

const loginReducer=(state=initialState, action) => {
    switch (action.type){
        case LOGIN_IN: return{
            userId : action.payload.id,
            userFirstName : action.payload.firstName,
            userPhotoURL : action.payload.picture
        }
        case LOGIN_IN_ERROR: return{
            userId: action.payload,
            userFirstName: EMPTY_STRING,
            userPhotoURL: EMPTY_STRING
        }
        case LOGIN_OUT: return {
            userId: EMPTY_STRING,
            userFirstName: EMPTY_STRING,
            userPhotoURL: EMPTY_STRING
        }
        case CREATE_USER: return {
            userId : action.payload.id,
            userFirstName : action.payload.firstName,
            userPhotoURL : action.payload.picture
        }
        case CREATE_USER_ERROR: return {
            userId: EMPTY_STRING,
            userFirstName: EMPTY_STRING,
            userPhotoURL: EMPTY_STRING
        }
        default:
            return state;
    }
};


export default loginReducer;