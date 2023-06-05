import React,{Component} from "react";
import './FormClass.js';
class FormFun1 extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            phoneno:"",
            email:"",
            date:"",
            password:"",

        }
        this.onChangeFun = this.onChangeFun.bind(this);
        console.log(this)
    }
    onChangeFun =(event)=>{
        console.log(event);
     
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmitFun = (event) =>{
        event.preventDefault();
        !this.state.emailAdd&&!this.state.password ? alert('empty value') :alert(this.state.emailAdd)
    }
    
    render(){

        return(
            <form style={{padding:"50px",alignContent:"center"} } onSubmit={this.onSubmitFun}>
                <label>User Name
                    <input type="name" name="name" id="name" onChange= {this.onChangeFun} />
                </label><br></br><br></br>
                <label>phone-No
                    <input type="tel" name="phoneno" id="phoneno"  onChange= {this.onChangeFun}/>
                </label><br></br><br></br>
                <label>E-Mail
                    <input type="email" name="emailAdd" id="emailAdd" onChange= {this.onChangeFun} />
                </label><br></br><br></br>
                <label>Date of Birth
                    <input type="date" name="date" id="date" onChange= {this.onChangeFun}/>
                </label><br></br><br></br>
                <label>passward
                    <input type="password" name="password" id="password" onChange= {this.onChangeFun}/>
                </label><br></br><br></br>
                <button>Submit</button>
            </form>
        )
    }
}
export default FormFun1;