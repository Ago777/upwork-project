const initialState = {
    isLoggedIn: true,
    loading: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {...state, loading: true};
        case 'LOGIN_SUCCESS':
            return {...state, loading: false, isLoggedIn: true};
        case 'LOGIN_FAILED':
            return {...state, loading: false};
        case 'LOGOUT':
            return {...state, isLoggedIn: false};
        default:
            return {...state};
    }
};

export default auth;