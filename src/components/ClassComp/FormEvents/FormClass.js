import React,{Component} from "react";
import './FormClass.css';

class FormClass extends Component{
    constructor(){
        super();
        this.state={

            userName:" ",
            Fname:" ",
            date:" ",
            email:" ",
            phone:" ",
            photo:" ",

        }
        console.log(this);
    }
    noChangeFunc=(event)=>{

        this.setState({[event.target.name]:event.target.value});
    };
    onSubmitFunc=(event)=>{
        event.preventDefault();
        !this.state.userName && !this.state.Fname.date.email.phone
        ? alert("Please enter all the below information")
        : alert(this.state.userName.Fname.date.email.phone);
    }

    render(){
        return(
      
      <form className="ofContainer">
       
        <div className="divContainer" onSubmit={this.onSubmitFunc}><label htmlFor="userName">Name </label>
        <input type="text" name="userName" maxLength="32" placeholder="enter your name" onChange={this.onChangeFunc}/></div><br/>

        <div className="divContainer"><label htmlFor="Fname">Father name</label>
        <input type="text" name="Fname" maxLength="32" placeholder="enter your father name" onChange={this.onChangeFunc}/></div><br/>

        <div className="divContainer"><label htmlFor="date">DOB </label>
        <input type="date" name="date" onChange={this.onChangeFunc}/></div><br/>

        <div className="divContainer"><label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="enter your email" onChange={this.onChangeFunc}/></div><br/>

        <div className="divContainer"><label htmlFor="phone">Phone.no</label>
        <input type="number" name="phone" placeholder="enter your number" onChange={this.onChangeFunc}/></div><br/>

        <div className="divContainer"><label htmlFor="photo">Photo</label>
        <input type="file" name="photo" onChange={this.onChangeFunc}/></div><br/>

        <div className="divContainer"><label>Address:</label></div>

        <div className="divContainer"> <button type="submit">Submit</button></div>
    </form>
        )
    }
} 
export default FormClass;