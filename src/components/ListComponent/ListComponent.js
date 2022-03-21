import React from "react";
import ListItem from "./ListItemComponent/ListItem";
const ListComponent = ({todos}) =>{
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo,index)=><ListItem key={index} todo={todo}></ListItem>)}
            </ul>
        </div>
    )
}

export default ListComponent;
