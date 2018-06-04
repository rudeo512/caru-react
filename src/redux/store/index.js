import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

export default function configureStore(reducer, initialState = {}) {
    const enhancers = compose(
        applyMiddleware(thunk)
    );

    return createStore(reducer, initialState, enhancers);
}