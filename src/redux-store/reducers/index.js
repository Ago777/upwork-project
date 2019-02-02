import {combineReducers} from 'redux';
import auth from "./auth-reducer";
import app from "./app-reducer";


const rootReducer = combineReducers({
    app,
    auth,
});

export default rootReducer;