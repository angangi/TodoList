import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
const sagaMiddileware = createSagaMiddleware();

const composeEnhancer = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

// const enhancer = composeEnhancer(applyMiddleware(thunk));
const enhancer = composeEnhancer(applyMiddleware(sagaMiddileware));
// store必须是唯一的
const store = createStore(
    reducer,
    enhancer);
sagaMiddileware.run(mySaga);
export default store;