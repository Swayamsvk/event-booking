import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/navbar.component';
import CreateEvent from './components/create-event.component';
import EditEvent from './components/edit-event.component';
import EventList from './components/event-list.component'



function App() {
  return (
  <Router>
    <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={EventList}/>
        <Route path="/edit/:id" component={EditEvent}/>
        <Route path="/create" component={CreateEvent}/>
    </div>
  </Router>  
    
  );
}

export default App;
