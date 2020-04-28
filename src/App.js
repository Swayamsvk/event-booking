import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/navbar.component';
import CreateEvent from './components/create-event.component';
import EditEvent from './components/edit-event.component';
import EventList from './components/event-list.component';
import Register from './components/register.component';
import Login from './components/login.component';


function App() {
  return (
  <Router>
    <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={EventList}/>
        <Route path="/edit/:id" component={EditEvent}/>
        <Route path="/create" component={CreateEvent}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
    </div>
  </Router>  
    
  );
}

export default App;
