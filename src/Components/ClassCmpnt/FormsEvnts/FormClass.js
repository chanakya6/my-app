import React, { Component } from "react";
import {form,Button} from 'react-bootstrap';
import "./FormClas.css";
//  import { Button } from "bootstrap";
class FormCls extends Component {
  constructor(){
    super();
    this.state={
      // Name:"",
      // Email:"",
    }
  }
      onChangeName(){
      console.log("Abcd");
    }
    onChangeEmail(event){    
      console.log(event.target.name);//Input box "name" will be displayed in the console
      console.log(event.target.value);//user input will be displayed in the console
    }
    onSubmitFunct=(event)=>{
      event.preventDefault();//This is a synthetic event which prevents the default behaviour of the browser
      console.log("Submitted");
      // !this.state.Email && !this.state.Password?alert('Enter the values'):alert(this.state.Password);
    };
  
  render() {
    return (
      <form className="FormCont" onSubmit={this.onSubmitFunct}>
        <div className="inputCont">
          <label htmlFor="Name">Name</label>
          <input
            type="Name"
            name="name"
            placeholder="Please enter your name" onChange={this.onChangeName()}
          />
        </div>
        <br />
        <div>
          <label htmlFor="Email">Email</label>
          <input type="Email Id"
            name="Email Id" //Input box name will be displayed in the console
            id="Email Id" 
            onChange={this.onChangeEmail}/>
        </div>
        <br />
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            name="Password"
            id="Password"
            placeholder="Please enter your Password"
        
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Cell NO.</label>
          <input
            type="cellNo."
            name="CellNo"
            id="Cell"
            placeholder="Please enter your Cell number"
          />
        </div>
        <br />
        <div>
          <label htmlFor="file">Choose a file to upload</label>
          <input type="file" name="File" id="file" />
        </div>
        <br />
        <div>
          <label htmlFor="color">Colour Picker</label>
          <input
            type="color"
            name="Color"
            id="clr"
            defaultValue="#2B9A23"
            placeholder="Choose your fav color"
          />
        </div>
        <br />
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
          />
        </div>
        <br />
        <div>
          <button>Submit</button>
        </div>
        <br />
      </form>
    );
  }
}
export default FormCls;
