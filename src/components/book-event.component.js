import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class BookEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeMembers = this.onChangeMembers.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      date: new Date(),
      price: 0,
      place: "",
      members: 0,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangePlace(e) {
    this.setState({
      place: e.target.value,
    });
  }

  onChangeMembers(e) {
    this.setState({
      members: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const events = {
      name: this.state.name,
      date: this.state.date,
      price: this.state.price,
      place: this.state.place,
      members: this.state.members,
    };

    axios
      .post("http://localhost:5000/booking/add", events)
      .then((res) => console.log(res.data));

    window.location = "/login";
  }

  render() {
    return (
      <div>
        <h3>Book Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Price:$</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>
          <div className="form-group">
            <label>Place:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.place}
              onChange={this.onChangePlace}
            />
          </div>
          <div className="form-group">
            <label>Members:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.members}
              onChange={this.onChangeMembers}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Book Event"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
