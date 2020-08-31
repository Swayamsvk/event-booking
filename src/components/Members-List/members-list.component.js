import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./members-list.css";
import AuthContext from "../../context/auth/authContext";

const Members = (props) => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <tr>
      <td>{props.member.name}</td>
      <td>{props.member.date.substring(0, 10)}</td>
      <td>{props.member.price}</td>
      <td>{props.member.place}</td>
      <td>{props.member.members}</td>
    </tr>
  );
};

export default class MembersList extends Component {
  constructor(props) {
    super(props);
    // this.membersList = this.membersList.bind(this);
    this.state = { members: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/booking/")
      .then((response) => {
        this.setState({ members: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  membersList() {
    return this.state.members.map((currentmember) => {
      return <Members member={currentmember} key={currentmember._id} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Booked Members</h3>
        <table className="table-light content-table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>date</th>
              <th>price</th>
              <th>place</th>
              <th>members</th>
            </tr>
          </thead>
          <tbody>{this.membersList()}</tbody>
        </table>
      </div>
    );
  }
}
