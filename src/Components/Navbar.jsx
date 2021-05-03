import React from 'react'
import {NavLink} from "react-router-dom"
import "../App.css"

function Navbar() {
    return (
     
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to ="/">Finex Tech</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="m-3 link"  to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="m-3 link" to="/Services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="m-3 link" to="/Contact">Contact</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
    
    
    )
}

export default Navbar
