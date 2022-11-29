import {
    AUTHENTICATE,
    LOGOUT,
 
} from "./actionTypes"
 

export const authenticate = (payload) => {
    return {
        type: AUTHENTICATE,
        payload: payload
    }
}
 

export const logout = () => {
    return {
        type: LOGOUT
    }
}
