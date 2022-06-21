import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/combineReducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //     window.__REDUX_DEVTOOLS_EXTENSION_  && window.__REDUX_DEVTOOLS_EXTENSION_()
    )
);

export default store;