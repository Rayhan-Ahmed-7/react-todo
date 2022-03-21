import React from 'react';

const Selection = () => {
    return (
        <div className="select">
            <select name="todos" id="" className="filter-todo">
                <option value="all">All</option>
                <option value="selected">Selected</option>
                <option value="unselected">Unselected</option>
            </select>
        </div>
    );
};

export default Selection;