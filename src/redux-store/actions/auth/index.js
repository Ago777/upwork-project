import actionTypes from "../action-types";
import doAction from "../shared";


export const loginAction = (username, password, history) => {
    return dispatch => {
        dispatch(doAction(actionTypes.LOGIN_PENDING));
        localStorage.setItem('user', 'ok');
        dispatch(doAction(actionTypes.LOGIN_SUCCESS, {user: 'ok'}));
        history.push('/app/dashboard');
    };
    //fetch
};

export const logoutAction = (history) => {
    return dispatch => {
        dispatch(doAction(actionTypes.LOGOUT));
        localStorage.removeItem('user')
    }
};

