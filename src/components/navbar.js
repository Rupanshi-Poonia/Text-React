import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";



export default function Navbar(props) {
  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
    </div>
  )
}

Navbar.propTypes = {
  title : PropTypes.string
}
