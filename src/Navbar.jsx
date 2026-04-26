import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Link to="/About">About</Link>
    <Link to="/">home</Link>
    <Link to="/pages">page</Link>
    <Link to="/product">product</Link>
    <Link to="*">all</Link>
    </div>
  )
}

export default Navbar