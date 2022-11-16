import React,{useState} from 'react'

function Todo() {
  const [todos, setTodos] = useState([{id:0,title:"Learn Styled Components",completed:false}])
  const handleAddTodo = title => {
    setTodos([...todos,{id:todos.length,title,completed:false}])
  }

  const handleToggleTodo = id => {
    
  }
  return (
    <div>
      
    </div>
  )
}

export default Todo
