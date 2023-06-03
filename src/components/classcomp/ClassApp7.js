/* import React, { Component } from "react";
import ClassState1 from "./States/ClassState1";

class ClassApp7 extends Component{
    render(){
        return(
            <div>
                <ClassState1/>
            </div>
        )
    }
}

export default ClassApp7; */

//////////////////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import ClassProps from './Props/ClassProps'

class ClassApp7 extends Component {
  render() {
    return (
      <div>
        <ClassProps Boolean={false}/>
      </div>
    )
  }
}

export default ClassApp7
