import {applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/RootReducer"
const Store= createStore(rootReducer,applyMiddleware(thunk));
export default Store;
