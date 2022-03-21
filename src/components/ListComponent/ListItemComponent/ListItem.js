import React from 'react';

const ListItem = ({todo}) => {
    return (
        <div className="newTodo">
        <li className="newItem">{todo.text}</li>
        <button className="complete-btn"><i className="fas fa-check"></i></button>
        <button className="delete-btn"><i className="fas fa-trash"></i></button>
    </div>
    );
};

export default ListItem;