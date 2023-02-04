import { ActionTypes } from "../constants/actionTypes"

// import { SET_USER } from "../constants/actionTypes"


export const loginAction = user =>{
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}

// export const loginAction = () =>{
//     return {
//         type: SET_USER
//     }
// }