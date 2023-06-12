import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./FormClass.css";

export default class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      emailAdd: " ",
      password: " ",
    };
    // console.log(this.state.emailAdd, this.state.password);
    // this.onChangeFunc1 = this.onChangeFunc.bind(this);type 1
    // console.log(this);
  }
  onChangeFunc = (event) => {
    //type 3 by arrow function
    // console.log(event.target.name);
    // console.log(event.target.value);

    this.setState({ [event.target.name]: event.target.name });
  };
  // // for this we have to bind
  // console.log(this);
  onSubmitFunc = (event) => {
    event.preventDefault();
    console.log("hi u r submitted me");
  };

  render() {
    return (
      <Form className="formContainer" onSubmit={this.onSubmitFunc}>
        <div className="inputContainer">
          <label htmlFor="emailAdd">Email</label>
          <input
            type="email"
            name="emailAdd"
            id="emailAdd"
            // onChange={(this.onChangeFunc = this.onChangeFunc.bind(this))}2 nd type
            onChange={this.onChangeFunc}
          />
          <h1>{this.state.emailAdd}</h1>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            // onChange={(this.onChangeFunc = this.onChangeFunc.bind(this))}
            onChange={this.onChangeFunc}
          />
          <h1>{this.state.password}</h1>
        </div>
        <br />
        <button>Submit</button>
        {/* <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="outline-primary">Primary</Button> */}
      </Form>
    );
  }
}
