import React,{Component} from "react";

const myStyle= {

    height:"300px",
    border:"2px solid",
    backgroundColor:"red",
    Color:"Black"
}
class FailedComp extends Component{
   
    render(){

        return <div style={myStyle}>Failed</div>
    }
}
export default FailedComp;