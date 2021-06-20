import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import AppBar from '../Navabar/Appbar';
import PrivateRouting from './privateRouting/PrivateRouting'
import { useSelector } from 'react-redux';
//modules for routing
import AllCategory from '../modules/AllCategory';
import Car from '../modules/Cars';
import LandsPlot from '../modules/LandsPlot';
import MobilePhone from '../modules/MobilePhone';
import MotorCycles from '../modules/Motorcycles';
import Tablet from '../modules/Tablets';
import Tv from '../modules/Tv';
import LandingPage from '../modules/landingPage/Landingpage';
import NavigationBar from './navigationbar/NavigationBar';
import Login from '../../components/modules/login/login'
// import loginFb from '../modules/loginFb';
// import loginPage from '../modules/login/login'
// import LoginPage from '../modules/login/LoginWindow';


function Routing() {
const authState = useSelector(state => state.AuthReducer.isUserLogedIn)

    return(
        <Router >
<AppBar />
<NavigationBar />
<Switch>
    <Route exact path="/">
<LandingPage />
    </Route>
    <PrivateRouting path="/car" auth={authState}>
<Car />
    </PrivateRouting>
    <Route path="/landsplot">
<LandsPlot />
    </Route>

    <Route path="/mobilephone">
        <MobilePhone />
    </Route>

    <Route path="/motorcycle">
        <MotorCycles/>
    </Route>

    <Route path="/tablet">
        <Tablet />
    </Route>

    <Route path="/tv">
<Tv />
    </Route>
 <Route path="/login">
     <Login />
 </Route>

 

    
</Switch>
        </Router>
    )
}

export default Routing;