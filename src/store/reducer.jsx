import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, AXIOS_TO_REDUX_TEST} from './actionTypes';
// 不写业务就写个默认的就行了

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早八点开晨会',
        '从九点开需求沟通会',
        '吃饭'
    ],
    test: "init"
};

//reducer必须是一个纯函数，不依赖于程序运行时的参数
//比如说是new Date()是不行的，ajax也是不行的
// 其实并不是reducer对state进行了修改，而是返回一个值
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT){
        //深度拷贝对象
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    else if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = [state.inputValue, ...state.list];
        newState.inputValue = '';
        return newState;
    }
    else if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        newState.inputValue = '';
        return newState;
    }
    else if(action.type === AXIOS_TO_REDUX_TEST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.test = action.value;
        return newState;
    }
    return state;
}