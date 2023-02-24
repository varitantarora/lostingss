import classes from "./Navbar.module.css";
import React from "react";
import {Link} from 'react-router-dom';
import Button from "../UI/Button";
const Navbar = props =>{

    return (<nav className="navbar navbar-expand-md navbar-dark">
  <div className="container-fluid">
    <Link className={`${classes["navBrand"]} ${"navbar-brand"}`} to="/">SHOP STORE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className={`${classes["navBarr"]} ${"collapse navbar-collapse"}`} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-lg-2 mb-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" data-toggle="tab" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/lostitems">Lost Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/founditems">Found Items</Link>
        </li>
        
        {/* <li className="nav-item ">
          <Link className="nav-link " to="/">Contact Us</Link>
        </li> */}
        {/* <li className="nav-item">
            <Button>Login</Button>
        </li> */}
        
      </ul>
      <Button onClick={props.onShowAuthForm}>Login</Button>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>)
}

export default Navbar;