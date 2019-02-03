const initialState = {
    isLoggedIn: false,
    user: localStorage.getItem('user'),
    loading: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {...state, loading: true};
        case 'LOGIN_SUCCESS':
            return {...state, loading: false, isLoggedIn: true, user: action.payload.user};
        case 'LOGIN_FAILED':
            return {...state, loading: false};
        case 'LOGOUT':
            return {...state, isLoggedIn: false, user: null};
        default:
            return {...state};
    }
};

export default auth;