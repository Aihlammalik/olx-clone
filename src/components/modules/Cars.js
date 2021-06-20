import {useDispatch} from 'react-redux';
import { doLogout } from '../../redux/action/authAction';



function Car() {
const dispatch = useDispatch();
const doUserLogout = () =>{
    dispatch(doLogout())
}
    return(
        <>
<h1>Car</h1>
<button onClick={()=>{doUserLogout()}}> logout</button>
        </>

    )
    
}

export default Car;