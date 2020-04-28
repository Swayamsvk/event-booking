import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Events Booking</Link>
                <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create Event Log</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                
              </ul>
            </div>
          </nav>
        );
    }
}

