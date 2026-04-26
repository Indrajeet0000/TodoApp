import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Navbar'
import Notfound from './pages/Notfound'
import Notes from './pages/Notes'



const App = () => {
  // const a= localStorage.getItem("user")
  // console.log(a);
  return (
    <div>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Notes' element={<Notes/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='*' element={<Notfound/>}/>

 
 
</Routes>

    </div>
  )
}

export default App