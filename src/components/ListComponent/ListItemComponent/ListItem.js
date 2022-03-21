import React from 'react';

const ListItem = ({todo,todos,setTodos}) => {
    const deleteHandaler = (e)=>{
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completedHandaler = ()=>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="newTodo">
        <li className={`newItem ${todo.completed ? "completed" : ''}`}>{todo.text}</li>
        <button onClick={completedHandaler} className="complete-btn"><i className="fas fa-check"></i></button>
        <button onClick={deleteHandaler} className="delete-btn"><i className="fas fa-trash"></i></button>
    </div>
    );
};

export default ListItem;