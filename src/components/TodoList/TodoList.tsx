import Task from "../Task/Task";
import {ITodoStore} from "../../typings";
import { List } from "../../styles/styles";

function TodoList({
    todos,
    onChangeTodo,
    onDeleteTodo
  }:{todos:ITodoStore[],onChangeTodo:(todo:ITodoStore)=>void,onDeleteTodo:(id:number)=>void}) {
    return (
      <List>
        {todos.map(todo => (
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </List>
    );
  }
  

export default TodoList
