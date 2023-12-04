import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import DiaryEntry from './DiaryEntry'
import Todomain from './Todomain'
import Weather from './Weather'
import Nopage from './Nopage'
import Navbar from './Navbar'

const Roouts = () => {
  return (
    <div>
        <Router>
          <Navbar/>
            <Routes>
                <Route path = "/Weather" element = { <Weather/>}></Route>
                <Route path = "/Todos" element = { <Todomain/>}></Route>
                <Route path = "/Diary" element = {<DiaryEntry/>}></Route>
                <Route path = "/*" element = {<Nopage/>}></Route>
            </Routes>
        </Router>
      
    </div>
  )
}

export default Roouts
