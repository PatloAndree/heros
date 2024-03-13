import { types } from "../types/types";
const initialState = {
    logged: false,
}
export const authReducer = ( state = {}, action) => {

    switch(action.type){
        case types.login:
            return {
                ...state,
                logged:true,
                user:action.payload,
                // id:0
            };
        case types.logout:
            return {
                // ...state,
                logged:false,
                // user:action.payload
            };
        default:
            return state;
    }
}   