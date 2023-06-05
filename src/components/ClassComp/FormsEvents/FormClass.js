import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
import "./FormClass.css";

class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      emailAdd: "",
      password: "",
    };
    //  console.log(this.state.emailAdd, this.state.password);

    //  this.onChangeFunc = this.onChangeFunc.bind(this);
    //  console.log(this);
  }
  onChangeFunc = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitFunc = (event) => {
    event.preventDefault();
    !this.state.emailAdd && !this.state.password
      ? alert("empty values")
      : alert(this.state.emailAdd);
  };

  render() {
    return (
      <form className="formContainer" onSubmit={this.onSubmitFunc}>
        <div className="inputContainer">
          <label htmlFor="emailAdd">Email</label>
          <input
            type="email"
            name="emailAdd"
            id="emailAdd"
            onChange={this.onChangeFunc}
          />
          <h1>{this.state.emailAdd}</h1>
        </div>
        <br />
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.onChangeFunc}
          />
          <h1>{this.state.password}</h1>
        </div>
        <br />
        <button>Submit</button>
      </form>
      // <Form>
      //   <Form.Group className="mb-3" controlId="formBasicEmail">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control type="email" placeholder="Enter email" />
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicPassword">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control type="password" placeholder="Password" />
      //   </Form.Group>
      //   <Button variant="primary" type="submit">
      //     Submit
      //   </Button>
      // </Form>
    );
  }
}

export default FormClass;
