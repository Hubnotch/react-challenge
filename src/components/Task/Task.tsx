import React,{useState} from 'react'
import { ITodoStore } from '../../typings';

function Task({ todo, onChange, onDelete }:{todo:ITodoStore,onChange:(todo:ITodoStore)=>void,onDelete:(id:number)=>void}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
      todoContent = (
        <>
          <input
            value={todo.title}
            onChange={e => {
              onChange({
                ...todo,
                title: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      todoContent = (
        <>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={e => {
            onChange({
              ...todo,
              completed: e.target.checked
            });
          }}
        />
        {todoContent}
        <button onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </label>
    );
  }

export default Task
