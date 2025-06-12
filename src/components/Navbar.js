import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* by this backticks in above line we use mode light OR dark that value set dynamically. And set via props. */}                                                
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    {/* <a className="nav-link" href="/about">About</a> */}
                    {/* yha pe link and to isliye use kiya h kuki react router ko use krna h. And iske threw page reload nhi hoga. and next page pe chla jayga.. Jaise React work krta h. phle simple HTML k jaise <a> tag and href m uska page path use kiya hua tha. */}
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div class={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
                    <input className="form-check-input" type='checkbox' id="switchToggle" onClick={props.toggleMode} />
                    <label className='form-check-label' htmlFor="switchToggle"><p>Enable {props.mode === 'light'? 'dark' : 'light'} mode</p></label>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
// we can define propTypes string Here. If we pass any other type then error shows. Make propes required Also 

Navbar.defaultProps = {
    title: "Set title here"
};

// We can set the props default getValue. If we not pass any value to our props then this default valus shows on browser.