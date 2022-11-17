import React, { useState } from 'react'
import Input from '../Input/Input';

function AddTodo({ onAddTodo }: any) {
    const [title, setTitlte] = useState('');
    
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setTitlte('');
        onAddTodo(title)

    }
    return (
        <form>
            <Input type="text"
            placeholder='Add Todo'
            value={title}
            onChange={(e) => setTitlte(e.target.value)} 
            name={''} 
            autoComplete={''}            />
            <button onClick={handleClick}>Add</button>
        </form>
    )
}

export default AddTodo
