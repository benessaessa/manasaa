import {
    AUTHENTICATE,
    LOGOUT,
    ADDINTEREST,
    SETINTERESTS,
    ADDINTERESTUNIT,
    DELETEINTERESTUNIT,
    ADDINTERESTRESALE,
    DELETEINTERESTRESALE
} from "./actionTypes"
import InterestServices from "services/Website/InterestServices";
import { toast } from "react-toastify";
import { SuccessCreated, SuccessOk } from "configs/statusCode";


export const authenticate = (payload) => {
    return {
        type: AUTHENTICATE,
        payload: payload
    }
}
export const setInterests = (payload) => {
    return {
        type: SETINTERESTS,
        payload: payload
    }
}
export const addInterest=(payload) => {
    return {
        type: ADDINTEREST,
        payload: payload
    }
}
export const addInterestUnit = (id, data, interestType,setToggleInterest ,updateProfileInterest=()=>{},profile) => {
    const interestServices = new InterestServices()

    return (dispatch, getState) => {
         const AuthData = getState().Auth
        console.log(AuthData.interestsUnits)

        if (interestType !== "delete") {
            interestServices.createInterest(data).then(response => {
                console.log(response)
                if (response && response.status === SuccessCreated) {
                    toast.success("Unit Added to Your Interests Successfully")
                    dispatch({
                        type: ADDINTERESTUNIT,
                        payload: {id}
                    })
                    setToggleInterest(false)
                }
            }).catch(err => { });
        } else {
            interestServices.deleteInterest(data).then(response => {
                if (response && response.status === SuccessOk) {
                    toast.success("Unit removed from Your interests")
                     dispatch({
                        type: DELETEINTERESTUNIT,
                        payload: { id }
                    })
                    setToggleInterest(false)
                    if (profile) {
                        updateProfileInterest()
                    }
                }
            }).catch(err => { });
        }

    };

}

export const addInterestResale = (id, data, interestType,setToggleInterest ,updateProfileInterest=()=>{},profile) => {
    const interestServices = new InterestServices()
    return dispatch => {
         if (interestType !== "delete") {
            interestServices.createInterest(data).then(response => {
                 if (response && response.status === SuccessCreated) {
                    toast.success("Resale Added to Your Interests Successfully")
                    dispatch({
                        type: ADDINTERESTRESALE,
                        payload: {id}
                    })
                    setToggleInterest(false)
                }
            }).catch(err => {});
        } else {
            interestServices.deleteInterest(data).then(response => {
                if (response && response.status === SuccessOk) {
                    toast.success("Resale removed from Your interests")
                     dispatch({
                        type: DELETEINTERESTRESALE,
                        payload: { id }
                    })
                    setToggleInterest(false)
                    if (profile) {
                        updateProfileInterest()
                    }
                }
            }).catch(err => {});
        }
    };

}

export const logout = () => {
    return {
        type: LOGOUT
    }
}
