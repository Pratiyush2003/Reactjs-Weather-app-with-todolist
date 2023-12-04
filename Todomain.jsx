import React, { useState } from 'react'
import Todolist from './Todolist'
import AddTodo from './AddTodo'

const Todomain = () => {

  const [todoitem, setTodoItem] = useState([
    {
      id: 1,
      work : "Jai Mahakal",
      Date : "22-22-2023"
    },
    {
      id: 2,
      work : "Jai Mahakal",
      Date : "22-22-2023"
    },
    {
      id: 3,
      work : "Jai Mahakal",
      Date : "22-22-2023"
    }
  ])

  const [id, setId] = useState('')
  

function deleteTodo(id){
         setTodoItem(todoitem.filter((d) => d.id !== id
         ))
}



  return (
    <div className='container text-white text-center'>
      <AddTodo todoitem = {todoitem} setTodoItem = {setTodoItem} 
      id = {id}  deleteTodo = {deleteTodo}></AddTodo>
      
      <Todolist todoitem = {todoitem} deleteTodo = {deleteTodo} setId = {setId}></Todolist>
    </div>
  )
}

export default Todomain
