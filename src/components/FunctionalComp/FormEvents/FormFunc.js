import { useState } from "react";

import "../../ClassComp/FormEvents/FormClass";

const FormFunc =()=>{

    const [userName,setUsername]=useState('');
    const [Fname,setFname]=useState('');
    const [date,setDate]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [photo,setPhoto]=useState('');
    const onSubmitFunc =(event)=>{

        event.preventDefault();
        !this.state.userName && !this.state.Fname.date.email.phone
        ? alert("Please enter all the below information")
        : alert(this.state.userName.Fname.date.email.phone);
    };

    return (
        <form className="ofContainer">
       
        <div className="divContainer" onSubmit={onSubmitFunc}><label htmlFor="userName">Name{userName} </label>
        <input type="text" name="userName" maxLength="32" placeholder="enter your name" onChange={(event)=>setUsername(event.target.value)}/></div><br/>

        <div className="divContainer"><label htmlFor="Fname">Father name{Fname}</label>
        <input type="text" name="Fname" maxLength="32" placeholder="enter your father name" onChange={(event)=>setFname(event.target.value)}/></div><br/>

        <div className="divContainer"><label htmlFor="date">DOB {date}</label>
        <input type="date" name="date" onChange={(event)=>setDate(event.target.value)}/></div><br/>

        <div className="divContainer"><label htmlFor="email">Email{email}</label>
        <input type="email" name="email" placeholder="enter your email" onChange={(event)=>setEmail(event.target.value)}/></div><br/>

        <div className="divContainer"><label htmlFor="phone">Phone.no{phone}</label>
        <input type="number" name="phone" placeholder="enter your number" onChange={(event)=>setPhone(event.target.value)}/></div><br/>

        <div className="divContainer"><label htmlFor="photo">Photo{photo}</label>
        <input type="file" name="photo" onChange={(event)=>setPhoto(event.target.value)}/></div><br/>

        <div className="divContainer"><label>Address:</label></div>

        <div className="divContainer"> <button type="submit">Submit</button></div>
    </form>
    )
}
export default FormFunc;
// userName:" ",
//             Fname:" ",
//             date:" ",
//             email:" ",
//             phone:" ",
//             photo:" ",