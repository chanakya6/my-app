import React, { Component } from "react";
//import { render } from "react-dom";
//import Form from 'react-bootstrap';
class FormFun extends Component{
    // here we have to crate a stste to hold the value
    constructor(){
        super();
        
            this.state = {
                emailAdd : "",
                passward: "",
                name:"",
            
        };
        console.log(this.state.emailAdd,this.state.passward);
       // this.onChangeFun = this.onChangeFun.bind(this);
       // console.log(this);
    
    }
    onChangeFun =(event) =>
    {
       this.setState( {[event.target.name] :event.target.value});
        //console.log(event.target.name);
        //console.log(event.target.value)
        
        
    };
   // onSubmitFun = (event) =>{
    //    event.preventDefault();
      //  !this.state.emailAdd&&!this.state.passward ? alert('empty value') :alert(this.state.emailAdd)
    
    render()
    { 
        return(<div>
             <form onSubmit={this.onSubmitFun}>
               {/* onChange evet is the browser event*/ }
               <label>User Name
                    <input type="name" name="name" id="name" onChange= {this.onChangeFun} />
                </label><br></br><br></br>
            <label htmlFor="emailAdd"> email
                <input type="email" name="email" id="emailAdd" onChange={this.onChangeFun} />
                
            </label><br></br> 
            <br></br> 
            <label htmlFor="password">passward
            <input type="password" name="passward" id="password" onChange= {this.onChangeFun} />
            
            </label><br></br>
            <button>Submit</button>
        </form>
       
            
        </div>)
    }
}

       
export default FormFun;