import './App.css';
import Selection from './components/Selection/Selection';
import Form from './components/Form/Form';
import ListComponent from './components/ListComponent/ListComponent';
import { useEffect, useState } from 'react';
function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filterTodos,setFilterTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  },[]);
  //local storage
  const saveLocalTodos = ()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  }
  useEffect(()=>{
    const filterHandler = ()=>{
      switch(status){
          case 'selected':
              setFilterTodos(todos.filter((todo)=>todo.completed===true))
              break;
          case 'unselected':
            setFilterTodos(todos.filter((todo)=>todo.completed===false))
            break;
          default:
            setFilterTodos(todos);
            break; 
        }
    }
    filterHandler();
    saveLocalTodos();
  },[todos,status])
  
  return (
    <div className="App">
      <div className="top-content">
        <header>
            <h2>Todo List App</h2>
        </header>
        <Selection setStatus={setStatus}></Selection>
        <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText}></Form>
      </div>
      <ListComponent todos={todos} setTodos={setTodos} filterTodos={filterTodos}></ListComponent>
    </div>
  );
}

export default App;
