import './App.css';
import Selection from './components/Selection/Selection';
import Form from './components/Form/Form';
import ListComponent from './components/ListComponent/ListComponent';
import { useState } from 'react';
function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <div className="top-content">
        <header>
            <h2>Todo List App</h2>
        </header>
        <Selection></Selection>
        <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText}></Form>
      </div>
      <ListComponent todos={todos}></ListComponent>
    </div>
  );
}

export default App;
