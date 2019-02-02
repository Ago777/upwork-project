import actionTypes from "../action-types";
import doAction from "../shared";


export const loginAction = (username, password) => {

    return dispatch => {
         dispatch(doAction(actionTypes.LOGIN_PENDING));
    };
    //fetch
};

export const logoutAction = (history) => {

    return dispatch => {
        // localStorage.removeItem('user');
        dispatch(doAction(actionTypes.LOGOUT));
    };
};

