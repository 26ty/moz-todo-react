// import React from 'react'; // the React library itself
// import logo from './logo.svg';
// import './App.css'; // no variable name and no from directive
import React,{useState} from "react";
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form2";
import FilterButton from "./components/FilterButton";


function App(props) {

  const [tasks,setTasks] = useState(props.tasks);
  console.log(typeof props.tasks) // object

  // 新增任務函數
  function addTask(name) {
    // alert(name)
    // const newTask = { id:`todo-${nanoid()}` , name , completed:false }; // nanoid() 生成亂碼
    const newTask = { id:`todo-${nanoid()}` , name , completed:false };
    setTasks([...tasks,newTask]) // spread語法:[複製現有陣列,尾端新增newTask]
  }

  // 改變任務狀態函數
  function toggleTaskCompleted(id) {
    // console.log(tasks[id])
    const updatedTasks = tasks.map((task) => {
      if(id === task.id){
        return {...task,completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks)
    console.log(tasks)
  }

  // 刪除任務函數
  function deleteTask(id) {
    console.log(id)
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks)
  }

  const taskList = tasks.map((task) => (
    <Todo 
      id={task.id}
      name={task.name} 
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  // 判斷任務數量變換'tasks' or 'task'
  const taskNoun = taskList.length > 1 ? 'tasks' : 'task';
  // 將任務長度以headingText變數呈現
  const headingText = `${taskList.length} ${taskNoun} remaining`
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
        {headingText}
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
