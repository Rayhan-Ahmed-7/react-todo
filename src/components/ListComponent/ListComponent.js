import React from "react";
import ListItem from "./ListItemComponent/ListItem";
const ListComponent = ({todos,setTodos,filterTodos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo,index)=><ListItem key={index} todo={todo} todos={todos} setTodos={setTodos}></ListItem>)}
            </ul>
        </div>
    )
}

export default ListComponent;
