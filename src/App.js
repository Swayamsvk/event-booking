import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import CreateEvent from "./components/create-event.component";
import EditEvent from "./components/edit-event.component";
import EventList from "./components/Events-List/event-list.component";
import Register from "./components/register.component";
import Login from "./components/login.component";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="container">
            <Navbar />
            <br />
            <PrivateRoute exact path="/" exact component={EventList} />
            <PrivateRoute exact path="/edit/:id" component={EditEvent} />
            <PrivateRoute exact path="/create" component={CreateEvent} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
