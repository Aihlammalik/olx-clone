import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { dologin, doSignup } from '../../../redux/action/authAction';

export default function UseSignup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 const dispatch = useDispatch();

    const doSignUser = () =>{
        let user ={
            email,
            password
        }
        dispatch(doSignup(user))
    }

    return [setEmail , setPassword ,  doSignUser]
}
