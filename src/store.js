import { createStore, applyMiddleware } from "redux";
import reduxSaga from 'redux-saga';
import rootSage from './sagas/index';
import rootReducer from './reducers/index';
export const getStore = () => {
    const initialState = {};
    const reduxSagamiddleware = reduxSaga();
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagamiddleware));
    reduxSagamiddleware.run(rootSage);
    return store;
}
