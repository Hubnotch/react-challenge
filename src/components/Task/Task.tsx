import React,{useState} from 'react'
import { Label } from '../../styles/styles';
import { ITodoStore } from '../../typings';
// import Input from '../Input/Input';
import "./Task.css"
function Task({ todo, onChange, onDelete }:{todo:ITodoStore,onChange:(todo:ITodoStore)=>void,onDelete:(id:number)=>void}) {

    const [isEditing, setIsEditing] = useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsEditing(false);
    }
    let todoContent;
    
    if (isEditing) {
      todoContent = (
        <div className='Todo'>
            <form className="Todo-edit-form" onSubmit={handleSubmit}>
                 <input
                  value={todo.title}
                  onChange={e => {
                      onChange({
                          ...todo,
                          title: e.target.value
                      });
                  } } name={''} autoComplete={''} />
          <button>
            Save
          </button>
            </form>
        </div>
      );
    } else {
      todoContent = (
        <div className='Todo'>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>
            <i className="fas fa-pen" />Edit
          </button>
        </div>
      );
    }
    return (
      <div className='Todo'>
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
        <i className="fas fa-trash" />Delete
        </button>
      </div>
    );
  }

export default Task
