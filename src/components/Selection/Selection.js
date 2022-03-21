import React from 'react';

const Selection = ({setStatus}) => {
    const filterTodos = (e)=>{
        setStatus(e.target.value);
    }
    return (
        <div className="select">
            <select onChange={filterTodos} name="todos" id="" className="filter-todo">
                <option value="all">All</option>
                <option value="selected">Selected</option>
                <option value="unselected">Unselected</option>
            </select>
        </div>
    );
};

export default Selection;