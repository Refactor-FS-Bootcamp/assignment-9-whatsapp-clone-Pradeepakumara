import { ActionTypes} from "../constants/actionTypes"


const initialState = {
    user: null 
}

export const loginReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: payload
            }
        default: return state;
    }
}

// export const loginReducer = (state=initialState, action) => {
//     switch(action.type){
//         case SET_USER:
//             return {
//                 ...state,
//                 user: state.user
//             }
//         default: return state;
//     }
// }