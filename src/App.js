import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-content">
        <header>
            <h2>Todo List App</h2>
        </header>
        <div className="select">
            <select name="todos" id="" className="filter-todo">
                <option value="all">All</option>
                <option value="selected">Selected</option>
                <option value="unselected">Unselected</option>
            </select>
        </div>
        <form action="">
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
      </div>
    </div>
  );
}

export default App;
