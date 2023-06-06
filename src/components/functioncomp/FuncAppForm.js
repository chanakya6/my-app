// import {Form,Button} from "react-bootstrap";
import React, { useState } from 'react';
import './FuncApp.css';

const FuncAppForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const onSubmitChange = (event) => {
    event.preventDefault();
    !email && !mobileNumber 
    ? alert("please fill the form correctly")
    : alert(email);
  };

  return (
    <div className='body'>
      <form className='middle_body' onSubmit={onSubmitChange}>
        <div className='head'>Login Form</div>
        <br />
        <div className='text'>
          <input
            title='Type Name'
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Enter your fullname'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <br />
        <div className='date_age'>
          <div className='date'>
            <input
              title='Date-of-birth'
              type='date'
              name='dateOfBirth'
              id='dateOfBirth'
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </div>
          <div className='age'>
            <input
              title='Type Age'
              type='text'
              name='age'
              id='age'
              placeholder='Age'
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div className='email'>
          <input
            title='Type e-mail'
            type='email'
            name='email'
            id='email'
            placeholder='Enter your e-mail'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <div className='password'>
          <input
            title='Type Password'
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />
        <div className='tel'>
          <input
            title='Type Mobile Number'
            type='tel'
            name='mobileNumber'
            id='mobileNumber'
            placeholder='Enter your mobile number'
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
        </div>
        <br />
        <br />
        <div className='button'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FuncAppForm;



