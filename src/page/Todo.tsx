import React,{useState} from 'react'
import { FormContainer } from '../styles/styles'
import AddTodo from '../components/AddTodo/AddTodo'
import TodoList from '../components/TodoList/TodoList'
import {ITodoStore} from '../typings'


function Todo() {
  const todoStore:ITodoStore[] = [{id:0,title:"Learn Styled Components",completed:false}]
  const [todos, setTodos] = useState(todoStore)

  const handleAddTodo = (title: string) => {
    setTodos([
      ...todos,
      {id:todos.length,title,completed:false}
    ])
  }

  const handleChangeTodo = (todo:ITodoStore) => {
    setTodos(todos.map(ele => ele.id === todo.id ? todo : ele))
  }
  const handleDeleteTodo = (id:number) => {
    setTodos(todos.filter(ele => ele.id !== id))
  }
  return (
    <div>
      <AddTodo 
      onAddTodo={handleAddTodo} 
      />
      <TodoList 
      todos={todos} 
      onChangeTodo={handleChangeTodo} 
      onDeleteTodo={handleDeleteTodo} 
      />
    </div>
  )
}

export default Todo
