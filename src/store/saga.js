import { takeEvery, put } from 'redux-saga/effects'
import { GET_TEST } from './actionTypes';
import axios from 'axios';
import {axiosToReduxTestAction} from './actionCreators';
function* mySaga(){
    yield takeEvery(GET_TEST, getTest )
}

function* getTest(){
    const res =  yield axios.get('http://localhost:3030');
    const action = axiosToReduxTestAction(res.data);
    yield put(action);

}

export default mySaga;