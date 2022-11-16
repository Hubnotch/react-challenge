import React,{useState} from 'react'

function AddTodo({onAddTodo}:any) {
    const [title,setTitlte] = useState('');

  return (
    <div>
      <input type="text" 
      placeholder='Add Todo'
      value={title} 
      onChange={(e)=>setTitlte(e.target.value)}
      />
      <button onClick={()=>{
        setTitlte('');
        onAddTodo(title)
      }}>Add</button>
    </div>
  )
}

export default AddTodo
