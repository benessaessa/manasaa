import {
    AUTHENTICATE,
    LOGOUT,
    ADDINTEREST,
    SETINTERESTS,
    ADDINTERESTUNIT ,
    DELETEINTERESTUNIT,
    ADDINTERESTRESALE ,
    DELETEINTERESTRESALE
 } from "./actionTypes"
 
const INITIAL_STATE = {
 token:"",
 userType:"",
 navigateTo:"",
 user_name:"",
 navigateTo:"",
 interestsResales:[],
 interestsUnits:[],
 permissions:[],
 lang:"",
 system:"Dynamic",
 getSetting:true,
 systemId:"",
 userId:""


}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTHENTICATE:
             return { ...state, ...action.payload }
        case LOGOUT:
            return {
                token:"",
                userType:"",
                navigateTo:"",
                user_name:"",
                navigateTo:"",
                interestsResales:[],
                interestsUnits:[],
                permissions:[],
                lang:state.lang,
                system:"Dynamic",
                getSetting:true,
                systemId:"",
                userId:""
             }
        case SETINTERESTS:
             return { ...state, ...action.payload }
        case ADDINTEREST:
                 return { ...state, ...action.payload }
        case ADDINTERESTUNIT:
                 return { ...state, interestsUnits : [...state.interestsUnits ,action.payload.id] }
        case DELETEINTERESTUNIT:
                 const updatedInterests = state.interestsUnits.filter(data => data !== action.payload.id)
                 return { ...state, interestsUnits : [...updatedInterests] }
        case ADDINTERESTRESALE:
                 return { ...state, interestsResales : [...state.interestsResales ,action.payload.id] }
        case DELETEINTERESTRESALE:
                 const updatedInterestsResales = state.interestsResales.filter(data => data !== action.payload.id)
                 return { ...state, interestsResales : [...updatedInterestsResales] }
         default:
            return state
    }
}

export default AuthReducer
