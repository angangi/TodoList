import React from 'react';
import { Input, Button, List } from 'antd';
import axios from 'axios'

// class TodoListUI extends Component { 
//     render() { 
        
//     }
// }

//无状态组件，不用继承Component

const TodoListUI = (props) => {
    return ( 
        <div style={{margin:'10px'}}>
            <div>
                <Input  placeholder={props.inputValue} 
                        style={{width:'250px', marginRight:'10px'}}
                        onChange={props.changeInputValue}
                        value={props.inputValue}
                />
                <Button type="primary" onClick={props.addItem}>增加</Button>
            </div>
            <div>
                <Button onClick={
                    () => {
                        axios.get('http://localhost:3030')
                        .then(function (response) {
                            //alert(response.data);
                            props.axiosToReduxTest(response.data);
                        })
                        .catch(function (error) {
                           alert(error);
                        });
                    }
                }
            >axios</Button>
            <span>{props.test}</span>
            </div>
            <div style={{margin:'10px', width:'300px'}}>
                <List bordered dataSource={props.list}
                    renderItem= { (item,index) => (
                        <List.Item onClick={()=>
                            {props.deleteItem(index)}}>{item}
                        </List.Item>
                    )} 
                />
            </div>
        </div>
    );
}
export default TodoListUI;