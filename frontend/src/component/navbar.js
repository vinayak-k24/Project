import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/auth.service';

function Navbar () {
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
      if(!authService.getCurrentUser() || authService.getExpiryToken()){
        localStorage.removeItem("token");
        setFlag(false);
      }   
      else{
          setFlag(true);
      }
    },[]);
	
    
    return <div>
		<nav className="navbar navbar-light navbar-expand-lg bg-white clean-navbar">
          <div className="container"><Link className="navbar-brand logo" to="/">Brand</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                      {
                        flag?
                        <>
                          <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </> 
                        :
                          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        }
                  </ul>
              </div>
          </div>
        </nav>
	</div>
}
export default Navbar;
