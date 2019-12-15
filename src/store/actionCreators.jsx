import { GET_TEST ,CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, AXIOS_TO_REDUX_TEST} from './actionTypes';
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

// 有利于自动化测试，而且业务逻辑都在action中，不会使生命周期函数
// 变得臃肿这里使用了redux-thunk中间件，使非纯函数的部分可以执行
// export const getTest = () => {
//     return (dispatch) => {
//         axios.get('http://localhost:3030')
//             .then(function (response) {
//                     //alert(response.data);
//                     //props.axiosToReduxTest(response.data);
//                     const action = axiosToReduxTestAction(response.data);
//                     dispatch(action);
//                 }
//             )
//     }
// }

export const getTest = () => ({
    type: GET_TEST

})