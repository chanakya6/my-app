import React,{Component} from 'react';
import FuncOne from './FuncOne';
import "./FuncThree.css"

function FuncThree(){
    return(
        <div>
            <h3 className='heading'>Getting FuncOne here</h3>//External Styling
            <FuncOne></FuncOne>
        </div>
    )
}
export default FuncThree;