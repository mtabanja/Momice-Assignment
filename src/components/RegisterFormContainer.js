import React, { Component } from "react";
import { connect } from "react-redux";
import request from "superagent";
import RegisterForm from "./RegisterForm";
import { URL } from "../constants";

class RegisterFormContainer extends Component {
  state = {};

  onSubmit = async () => {
    const { firstName, lastName, email, dOb, hobbies, gender } = this.state;
    const eventId = this.props.match.params.id;
    await request
      .post(`${URL}/guest`)
      .send({ firstName, lastName, email, dOb, hobbies, gender, eventId })
      .catch(console.error);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  callBack = number => {
    const genderNumber = number;
    if (genderNumber === 10) {
      this.setState({ gender: "male" });
    } else if (genderNumber === 20) {
      this.setState({ gender: "female" });
    }
  };

  render() {
    return (
      <div>
        <RegisterForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          callBack={this.callBack}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(RegisterFormContainer);
