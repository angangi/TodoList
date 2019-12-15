import React from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
    let {inputValue, inputChange, list, clickButton} = props;
        
    return ( 
        <div>
            <input value={ inputValue } 
                onChange={ inputChange }/>
            <button onClick={clickButton}>提交</button>
            <ul>
                {
                    list.map(
                        (item, index) => {
                            return (<li key={index}>{item}</li>)
                        } 
                    )
                }
            </ul>
        </div>
     );
}

//映射器
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            //console.log(e.target.value);
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action);
        },
        clickButton(e){
            let action = {type: 'add_item'};
            dispatch(action);
        }
    }
}

//连接器，不需要明确引入state
export default connect(stateToProps, dispatchToProps)(TodoList);