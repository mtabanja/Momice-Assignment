import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../actions";
import EventList from "./EventLis";
import request from "superagent";
import { URL } from "../constants";

// ==============================

//=================================

class EventListContainer extends Component {
  state = {};

  componentWillMount = () => {
    document.body.style.backgroundColor = "rgb(148, 107, 107)";
  };

  componentWillUnmount = () => {
    document.body.style.backgroundColor = null;
  };

  componentDidMount = () => {
    this.props.loadEvents();
  };

  onSubmit = async event => {
    const { name, picture, description } = this.state;

    await request
      .post(`${URL}/event`)
      .send({ name, picture, description })
      .catch(console.error);

    setTimeout(() => {
      this.props.loadEvents();
    }, 500);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onDelete = async id => {
    await request.del(`${URL}/event/${id}`).catch(console.error);
    this.props.loadEvents();
  };

  render() {
    return (
      <div>
        <EventList
          events={this.props.events}
          onDelete={this.onDelete}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventListContainer);
