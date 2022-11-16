import Task from "../Task/Task";
import {ITodoStore} from "../../typings";

function TodoList({
    todos,
    onChangeTodo,
    onDeleteTodo
  }:{todos:ITodoStore[],onChangeTodo:(todo:ITodoStore)=>void,onDeleteTodo:(id:number)=>void}) {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    );
  }
  

export default TodoList
