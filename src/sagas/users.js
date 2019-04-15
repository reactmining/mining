import { takeLatest, call, put } from "@redux-saga/core/effects";
import { GET_USERS, SET_USERS } from './../actions/index';
import gql from "graphql-tag";
import { client } from './../index';
export const watchGetUsers = function* () {
    console.log('object1');
    yield takeLatest(GET_USERS, workerGetUsers);
}

function* workerGetUsers() {

    client
        .query({
            query: gql`
            {
                user(username:"nirma",password:"password"){
                      username
                  id
                }
              }
      `
        })
        .then(result => console.log(result));
    //const result = yield call(Axios.get, url);
    //yield put({ type: SET_USERS, payload: result.data });
}