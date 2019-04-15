import { watchGetUsers } from "./users";
import { call, all } from '@redux-saga/core/effects';

export default function* () {
    yield all([
        call(watchGetUsers)
    ])
}