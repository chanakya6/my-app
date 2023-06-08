import React,{Component} from 'react';
class ClassState extends Component{
    constructor() {
        super();
        this.state = {
            name:"Neelima"
        }
    }
    render() {
        return <h1 onClick={()=>this.setState({name:"Somishetty`"})}>{this.state.name} Class State Component</h1>
    }
}
export default ClassState;