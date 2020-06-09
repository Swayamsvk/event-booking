import React,{ Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import fire from './config/fire';
import Navbar from './components/navbar.component';
import CreateEvent from './components/create-event.component';
import EditEvent from './components/edit-event.component';
import EventList from './components/event-list.component';
import Register from './components/register.component';
import Login from './components/login.component';


class App extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      user:{}
    }
  }

  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }


  render(){  
    return (
      <div className="container">
      {this.state.user ? (
      <Router>
      <div className="container">
       
      
        <Navbar />
          <br/>
          <Route path="/" exact component={EventList}/>
          <Route path="/edit/:id" component={EditEvent}/>
          <Route path="/create" component={CreateEvent}/>
          <Route path="/register" component={Register}/>
      </div>
    </Router> 
    ) : (<Login/>)}
    
    </div> 
      
    );
  }
}

export default App;
