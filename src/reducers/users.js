export const users = (state = null, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.payload;
        default: return state;
    }
}