import React from 'react';

const Form = ({setInputText,setTodos,todos,inputText}) => {
    const eventHandler = (e) =>{
        setInputText(e.target.value);
    }
    const addTodo = (e) =>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.round(Math.random() * 1000)}]);
        setInputText('');
    }
    return (
        <div>
            <form action="">
                <input onChange={eventHandler} type="text" value={inputText} className="todo-input" />
                <button disabled={!inputText? true:false} onClick={addTodo} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    );
};

export default Form;