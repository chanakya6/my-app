import React,{Component} from 'react';
import FuncComp from '../FunctionalComponents/FuncComp';
const mystyle={color:"red"};
function FuncAdv(){
    return(
        <div>
            <FuncComp></FuncComp>
            //Inline styling
            <h4 style={{color:'yellow'}}>What are the advantages of Functional Components??</h4>
            <p style={mystyle}>The biggest advantage of the functional component is that they have your code easily and also make your program easy to read and understand for others.</p>
        </div>
    )
}
export default FuncAdv;