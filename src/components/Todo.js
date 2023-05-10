import React,{useState} from "react";

export default function Todo({name,completed,id,toggleTaskCompleted,deleteTask,editTask}) {
  const [isEditing, setEditing] = useState(false);

  //編輯畫面
  const editingTemplate = (
    <form className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input id={id} className="todo-text" type="text" placeholder={name}/>
      </div>
      <div className="btn-group">
        <button 
          type="button" 
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );
  //檢視畫面
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button 
          type="button" 
          className="btn"
          onClick={() => setEditing(true)}
        >
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}>
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );

  return(
    <li className="todo">{isEditing ? editingTemplate:viewTemplate}</li>
        // <li className="todo stack-small">
        //   <div className="c-cb">
        //     <input
        //       id={id}
        //       type="checkbox" 
        //       defaultChecked={completed} 
        //       onChange={() => toggleTaskCompleted(id)}
        //     />
        //     <label className="todo-label" htmlFor={id}>
        //       {id}.{name}
        //     </label>
        //   </div>
        //   <div className="btn-group">
        //     <button 
        //       type="button" 
        //       className="btn"
              
        //     >
        //       Edit <span className="visually-hidden">{name}</span>
        //     </button>
            
        //     <button 
        //       type="button" 
        //       className="btn btn__danger"
        //       onClick={() => {deleteTask(id)}}
        //     >
        //       Delete <span className="visually-hidden">{name}</span>
        //     </button>
        //   </div>
        // </li>
    );
}