import React, { Component } from "react";
import { loadGuests } from "../actions";
import { connect } from "react-redux";
import request from "superagent";
import { URL } from "../constants";

import { Link } from "react-router-dom";

// import { Col, Row, Container } from "react-bootstrap";

class GuestList extends Component {
  componentDidMount = () => {
    const eventId = this.props.match.params.id;
    this.props.loadGuests(eventId);
  };

  delete = async id => {
    const eventId = this.props.match.params.id;
    await request.del(`${URL}/guest/${id}`).catch(console.error);
    this.props.loadGuests(eventId);
  };

  render() {
    const checkGuests = this.props.guests ? (
      this.props.guests.length < 1 ? (
        <div className="check-guest-text">
          <h1>
            No Guests Were Regetired
            <br />
            To this Event Yet
          </h1>
          <p>Invite Someone To Register from the following link</p>
          <Link
            style={{ textDecoration: "none", color: "Yellow" }}
            target="_blank"
            to={`${this.props.match.params.id}/register`}
          >
            Invite
          </Link>
        </div>
      ) : (
        <div className="check-guest-text">
          <h1>
            {this.props.guests.length} People Registerd
            <br /> For This Event
          </h1>
          <p>Invite Someone To Register from the following link</p>
          <Link
            style={{ textDecoration: "none", color: "Yellow" }}
            target="_blank"
            to={`${this.props.match.params.id}/register`}
          >
            Invite
          </Link>
        </div>
      )
    ) : (
      ""
    );

    const svg = (
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        x="0"
        y="0"
        viewBox="0 0 172 172"
      >
        <g
          style={{ mixBlendMode: "normal" }}
          fill="none"
          strokeMiterlimit="10"
          fontFamily="none"
          fontSize="none"
          fontWeight="none"
          textAnchor="none"
        >
          <path d="M0 172V0h172v172z"></path>
          <path
            className="svg"
            fill="#000"
            d="M72.24 6.88c-5.657 0-10.32 4.663-10.32 10.32v6.88H34.937c-.201-.027-.39-.054-.59-.054-.162.014-.337.027-.498.054H27.52a3.46 3.46 0 00-3.023 1.707 3.473 3.473 0 000 3.466 3.46 3.46 0 003.023 1.707h3.44V154.8c0 5.657 4.663 10.32 10.32 10.32h89.44c5.657 0 10.32-4.663 10.32-10.32V30.96h3.44a3.46 3.46 0 003.023-1.707 3.473 3.473 0 000-3.466 3.46 3.46 0 00-3.023-1.707h-6.302a3.11 3.11 0 00-1.116 0H110.08V17.2c0-5.657-4.663-10.32-10.32-10.32zm0 6.88h27.52a3.43 3.43 0 013.44 3.44v6.88H68.8V17.2a3.43 3.43 0 013.44-3.44zm-34.4 17.2h26.942a3.11 3.11 0 001.116 0h40.164a3.11 3.11 0 001.115 0h26.983V154.8a3.43 3.43 0 01-3.44 3.44H41.28a3.43 3.43 0 01-3.44-3.44zm24.04 37.8a3.486 3.486 0 00-3.185 2.15 3.442 3.442 0 00.793 3.762L81.136 96.32l-21.648 21.648c-.9.86-1.263 2.15-.94 3.346a3.405 3.405 0 002.458 2.459 3.413 3.413 0 003.346-.94L86 101.183l21.648 21.648c.86.9 2.15 1.263 3.346.94a3.405 3.405 0 002.459-2.458 3.413 3.413 0 00-.94-3.346L90.863 96.32l21.648-21.648a3.431 3.431 0 00.766-3.803 3.424 3.424 0 00-5.63-1.061L86 91.456 64.352 69.808c-.645-.672-1.532-1.035-2.472-1.048z"
          ></path>
          <path d="M86 172c-47.496 0-86-38.504-86-86S38.504 0 86 0s86 38.504 86 86-38.504 86-86 86z"></path>
          <path d="M86 168.56c-45.597 0-82.56-36.963-82.56-82.56S40.403 3.44 86 3.44 168.56 40.403 168.56 86 131.597 168.56 86 168.56z"></path>
          <path d="M0 172V0h172v172z"></path>
          <path d="M3.44 168.56V3.44h165.12v165.12z"></path>
        </g>
      </svg>
    );
    const guestsList = this.props.guests
      ? this.props.guests.map(guest => (
          <tr key={guest.id} className="info">
            <td>{guest.firstName}</td>
            <td>{guest.lastName}</td>
            <td>{guest.email}</td>
            <td>{guest.gender}</td>
            <td>{guest.hobbies}</td>
            <td onClick={() => this.delete(guest.id)}>{svg}</td>
          </tr>
        ))
      : "";

    if (this.props.guests) {
      return (
        <div>
          {checkGuests}
          <table>
            <thead>
              <tr className="info-holder">
                <th>Firstname</th>
                <th>Lastname</th>
                <th>email</th>
                <th>gender</th>
                <th>hobbies</th>
                <th></th>
              </tr>
              {guestsList}
            </thead>
          </table>
        </div>
      );
    } else
      return (
        <div>
          <p>Loading......</p>;
        </div>
      );
  }
}

const mapStateToProps = state => ({
  guests: state.guests
});

export default connect(mapStateToProps, { loadGuests })(GuestList);
