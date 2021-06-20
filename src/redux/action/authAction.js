import {auth} from '../../config/firebase';
import { LOGIN ,LOGOUT } from '../Types/Types';





export const dologin = (email,password) => async(dispatch) =>{
    try {

        //firebase functions to call

    const  userCredential = await  auth.signInWithEmailAndPassword(email, password);
 
    var user = userCredential.user;

console.log("user", user);

        dispatch({
            type: LOGIN,
            Payload:  user,
        })
    } catch (error) {
        console.log("error" , error);
    }
}

// logout

export const doLogout = () => async(dispatch) =>{
    try {

        //firebase functions to call

    const  res = await  auth.signOut();
 

console.log("user", res);

        dispatch({
            type: LOGOUT,
          
        })
    } catch (error) {
        console.log("error" , error);
    }
}


//signup

export const doSignup = (user) => async(dispatch) =>{
    try {

        //firebase functions to call

    const  userCredential = await  auth.createUserWithEmailAndPassword(user.email, user.password);
 
    var userData = userCredential.user;

console.log("user", userData);

        dispatch({
            type: LOGIN,
            Payload:  userData,
        })
    } catch (error) {
        console.log("error" , error);
    }
}