// store.js
import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {createInjectorsEnhancer} from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import globalReducer from "./slice";
import rootSaga from "./saga";

const staticReducers = {
    global: globalReducer,
};

function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        ...staticReducers,
        ...injectedReducers,
    });
    return rootReducer;
}


const sagaMiddleware = createSagaMiddleware();
const runSaga = sagaMiddleware.run;


const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
});

const middlewares = [sagaMiddleware];


const composeEnhancers = compose;

const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(...middlewares), injectEnhancer),
);

sagaMiddleware.run(rootSaga);

export default store;
