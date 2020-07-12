import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';


export default class Navbar extends Component{
    render(){
        return(
            <nav>
                <div>
                <Link to="/" className="link_main nav-link" id="main">Events Booking</Link>
                </div>
                <div>
              <ul>
                <li>
                    <Link to="/" className="nav-link link">Events</Link>
                </li>
                <li>
                  <Link to="/create" className="nav-link link">Create Event Log</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/logout" className="nav-link">Logout</Link>
                </li> */}
                
              </ul>
            </div>
          </nav>
        );
    }
}

