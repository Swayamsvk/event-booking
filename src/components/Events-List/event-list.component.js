import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./event-list.css";
import AuthContext from "../../context/auth/authContext";

const Event = (props) => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <tr>
      <td>{props.event.name}</td>
      <td>{props.event.date.substring(0, 10)}</td>
      <td>{props.event.time}</td>
      <td>{props.event.price}</td>
      <td>{props.event.place}</td>
      <td>
        <Link to={"/edit/" + props.event._id}>edit</Link> |
        <a
          href="#"
          onClick={() => {
            props.deleteEvent(props.event._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.deleteEvent = this.deleteEvent.bind(this);
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

  deleteEvent(id) {
    axios
      .delete("http://localhost:5000/events/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      events: this.state.events.filter((el) => el._id !== id),
    });
  }

  eventList() {
    return this.state.events.map((currentevent) => {
      return (
        <Event
          event={currentevent}
          deleteEvent={this.deleteEvent}
          key={currentevent._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <h3>Logged Events</h3>
        <table className="table-light content-table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>date</th>
              <th>time</th>
              <th>price</th>
              <th>place</th>
            </tr>
          </thead>
          <tbody>{this.eventList()}</tbody>
        </table>
      </div>
    );
  }
}
