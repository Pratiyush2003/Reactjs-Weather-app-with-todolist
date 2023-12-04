import React, {  useEffect, useState } from 'react'
import './form.css'

const AddTodo = ({ todoitem , setTodoItem , id , deleteTodo}) => { 
  const [work, setWork] = useState('');
  const [Date, setDate] = useState('')

  
  function addTodo(e){
      e.preventDefault();
      const obj = {
      id : Math.random(),
      work,
      Date
    }
    
    setTodoItem([...todoitem, obj])
      setWork('');
      setDate('');
  }

useEffect(() => {
  if(id){
    const updatedData = todoitem.filter((d) => d.id === id)
    setWork(updatedData[0].work)
    setDate(updatedData[0].Date)
    deleteTodo(id)
  }
},[id])
  
    
  return (
    <>
    <form onSubmit={addTodo}>

      <input type='text' value={work} className = "js-inputform" onChange={(e) =>  setWork(e.target.value)} placeholder='Write Task'></input>
      <input type='text' value={Date} className = "js-inputform" onChange={(e) => setDate(e.target.value)} placeholder='Add Time'></input>
      <button className='btn btn-primary' style={{marginTop : '30px'}}>Add</button>

    </form>
   
    </>
  )
}

export default AddTodo
