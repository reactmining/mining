
export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export function login(data) {
    return {
        type: 'LOGIN',
        payload: data
    };
}