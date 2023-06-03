/* import React, { Component } from "react";

class ClassProps extends Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    console.log(this.props.name);
    console.log(this.props.age);
    console.log(this.props.array);
    console.log(this.props.object);
    console.log(this.props.boolean); // Corrected prop name

    return (
      <div>
        <h1>Made a Class props and added five properties string, number, array, object and Boolean in the component.</h1>
      </div>
    );
  }
}

export default ClassProps; */

////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* import React,{Component} from "react";

class ClassProps extends Component{ 
  constructor(){
    super();
  }
      render(){
          return(
            <div>
                <h1>My name is : {this.props.name}</h1>
                <h1>My age is : {this.props.age}</h1>
                <h1>I'm from : {this.props.place}</h1>
            </div>
          )
      }
}

export default ClassProps; */

///////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import FailCondition from "../classConditions/FailCondition";
import SuccessCondition from "../classConditions/SuccessConition";


 class ClassProps extends Component {
  render() {
    return (
      <div>
          {this.props.Boolean?<SuccessCondition/>:<FailCondition/>}
      </div>
    )
  }
}

export default ClassProps;
