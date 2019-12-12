import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, AXIOS_TO_REDUX_TEST} from './actionTypes';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM,
})

export const deleteItemAction = (value) => ({
    type: DELETE_ITEM,
    value
})

export const axiosToReduxTestAction = (value) => ({
    type:  AXIOS_TO_REDUX_TEST,
    value
})

