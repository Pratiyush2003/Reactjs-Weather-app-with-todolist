import React from 'react'
import './Navbar.css'

const Todolist = ({ todoitem , deleteTodo , setId }) => {
  return (
    <div className='container' >
      <table className="table table-hover table-dark" style={{backgroundColor : 'black'}}>
        <thead>
          <tr>
            <th scope="col">Work</th>
            <th scope="col">Date-Time</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        {todoitem.map((d) => {
          return (
            <tbody key={d.id}>
              <tr >
                <td>{d.work}</td>
                <td>{d.Date}</td>
                <td>
                  <button className='btn btn-danger mx-3' onClick = {() => deleteTodo(d.id)} >
                  <i className="bi bi-trash3"></i>
                  </button>
                  <button className='btn btn-warning' 
                  onClick={() => setId(d.id)}>
                  <i className="bi bi-pen-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}

      </table>
    </div>
  )
}

export default Todolist
