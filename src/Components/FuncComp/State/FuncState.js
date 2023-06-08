import React,{useState} from 'react';
const FuncState = () => {
    const [name, setName] = useState("Neelima");
    return <h1>{name} Func State Component v</h1>
};
export default FuncState;