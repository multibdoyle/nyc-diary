import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

const NavButton = ({ to, name }) => {
  return (
    <div className="navButtonContainer">
      <Link to={to}>
        <button type="button" className="navButtonBody">
          {name}
        </button>
      </Link>
    </div>
  )
}

const NavBar= (props) => {

  return (
    <div className="billboardNav">
      <NavButton to='/' name="Home" />
      <NavButton to='/cookies' name="Cookies" />
      <NavButton to='/genetics' name='Genetics' />
        </div>
  )
}

export default NavBar