import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Event = (props) => {
  return (
    <div className="container">
      <h1>{props.event.name}</h1>
      <p>Date: {props.event.date.substring(0, 10)}</p>
      <p>Time: {props.event.time}</p>
      <p>Price: {props.event.price}</p>
      <p>Place: {props.event.place}</p>
    </div>
  );
};

export default class Shevents extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/events/")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  eventList() {
    return this.state.events.map((currentevent) => {
      return <Event event={currentevent} key={currentevent._id} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Events</h3>
        <table className="table-light content-table">
          <thead className="thead-light"></thead>
          <tbody>{this.eventList()}</tbody>
        </table>
      </div>
    );
  }
}
