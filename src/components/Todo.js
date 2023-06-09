import React,{useEffect,useRef,useState} from "react";
//focus
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Todo({name,completed,id,toggleTaskCompleted,deleteTask,editTask}) {

  // 判斷檢視畫面 or 編輯畫面 
  const [isEditing, setEditing] = useState(false);

  // 保存新名稱狀態
  const [newName,setNewName] = useState("");

  //focus
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  //focus
  const wasEditing = usePrevious(isEditing);

  // 監聽input有無更改value
  function handleChange(e) {
    setNewName(e.target.value);
  }

  // 點擊送出時取得name(value)
  function handleSubmit(e) {
    e.preventDefault();
    editTask(id,newName); // app.js
    setNewName("");
    setEditing(false);
  }

  //編輯畫面
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input 
          id={id} 
          className="todo-text" 
          type="text" 
          placeholder={name}
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
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
          ref={editButtonRef}
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

  //focus
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing])

  console.log("main render");
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