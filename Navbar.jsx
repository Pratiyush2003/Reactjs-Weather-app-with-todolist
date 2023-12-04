import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container' style = {{background : '#712cf9'}}>
            {/* <h1 className='text-center text-white'>Daily Routine App</h1>   */}
            <ul className="nav justify-content-center">
              <Link to = {'/Weather'}><li className="nav-item">
                    <div className="nav-link text-white" >Weather</div>
                </li></Link>

              <Link to = {'/Todos'}> <li className="nav-item">
                    <div className="nav-link text-white" >Todos</div>
                </li></Link>

              <Link to = {'/Diary'}> <li className="nav-item">
                    <div className="nav-link text-white" >Diary</div>
                </li></Link> 
            </ul>
    </div>
  )
}

export default Navbar
