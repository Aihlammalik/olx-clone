import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { dologin } from '../../../redux/action/authAction';

export default function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 const dispatch = useDispatch();

    const doLoginUser = () =>{
        dispatch(dologin(email,password))
    }

    return [setEmail , setPassword ,  doLoginUser]
}








