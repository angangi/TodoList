import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index';
import {changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);

        store.subscribe(this.storeChange);
    }
    render() { 
        return (  
            <TodoListUI

                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                list={this.state.list}
            />
        );
    }

    storeChange(){
        this.setState(store.getState);
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    addItem(){
        const action = addItemAction();
        store.dispatch(action);
    }

    deleteItem(index){
        const action= deleteItemAction(index);
        store.dispatch(action);
    }
}
 
export default TodoList;