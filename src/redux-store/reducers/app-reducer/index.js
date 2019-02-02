const initialState = {
    app: true
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'app':
            return {...state, loading: true};
        default:
            return {...state};
    }
};

export default app
