import React from 'react'
import{ Link } from 'react-router-dom'

const Header = (props) => {
  const { branding }=props;
  return (
    <div className="navbar navbar-expand-sm bg-dark
         navbar-dark mb-3 py-0">
      <div className="container">
        <a href="./" className="navbar-brand">{branding}</a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
          <i style={{color:'white'}} className="fas fa-home"></i>
            Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
          <i style={{color:'white'}} className="fas fa-plus"></i>
           Add Contact</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link ">
          <i style={{color:'white'}} className="fas fa-question"></i> 
          About</Link>
        </li>
      </ul>
    </div>
               
  )
}

export default Header;