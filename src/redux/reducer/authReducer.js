import { LOGIN } from "../Types/Types";
import { LOGOUT } from "../Types/Types";

const initialState = {
    isUserLogedIn: false,
    user: null
}



function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {

            return {
                ...state,
                isUserLogedIn: true,
                user: action.payload
            };
        }

        case LOGOUT: {

            return {
                ...state,
                isUserLogedIn: false,
                user: null
            };
        }




        default:
            return state;
    }
}


export default AuthReducer;