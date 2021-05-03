import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div className="container-fluid p-4 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid w-75">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Contact">Contact page</NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar
