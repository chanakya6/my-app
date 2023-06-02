import React from 'react';
// const FuncProps = (props) => {
//     return <h1>{props.name} age is {props.age} male: {props.male}</h1>
// }
// const FuncProps = ({ name, age }) => {
//     return <h2>{name} age is {age}</h2>
// }
const FuncProps = ({ String, Number, Boolean }) => {
    return <h2>{String} Age is {Number} male:{Boolean} </h2>
}
export default FuncProps;