// import React from 'react'; // the React library itself
// import logo from './logo.svg';
// import './App.css'; // no variable name and no from directive
import Todo from "./components/Todo";
import Form from "./components/Form2";
import FilterButton from "./components/FilterButton";

function addTask(name) {
  alert(name);
}

function App({tasks}) {

  const taskList = tasks.map((task) => (
    <Todo 
      id={task.id}
      name={task.name} 
      completed={task.completed}
      key={task.id} 
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
        {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button> */}
      </div>

      <h2 id="list-heading">
        3 tasks remaining
      </h2>

      <ul
        list="list" 
        className="todo-list stack-large stack-exception" 
        aria-labelledby="list-heading"
      >
        
        {taskList}
      </ul>
    </div>
  );
}

export default App;
