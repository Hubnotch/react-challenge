import React,{useState} from 'react'

function AddTodo({addTodo}:any) {
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
        addTodo(title)
      }}>Add</button>
    </div>
  )
}

export default AddTodo
