// import {Form,Button} from "react-bootstrap";
import React, { useState } from 'react';
import './Pages.css';
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

const FuncAppForm = () => {
  const languages = ['Telugu', 'Tamil', 'Hindi', 'kannada', 'Malayalam'];
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [language, setLanguage] = useState('Telugu');
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState(false);


  const onSubmitChange = (event) => {
    event.preventDefault();
    if (fullName && dateOfBirth && age && email && password && mobileNumber && language && checkbox) {
      alert("Thanks for submitting");
    } else {
      alert("I don't want to say thanks to you Please fill all");
    }
  };

  return (
    <div className='loginback'>
      <div className='llllll'>
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
                required
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
                  required
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
                  required
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
                required
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
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <br />
            <div className='radio'>
              Gender:
              <div>
                <input type="radio"
                  name="radio"
                  id="radio"
                  value="Male"
                  checked={radio}
                  onChange={(event) => setRadio(event.target.checked)} />M
              </div>
              <div>
                <input type="radio"
                  name="radio"
                  id="radio"
                  value="Male"
                  checked={radio}
                  onChange={(event) => setRadio(event.target.checked)} />F
              </div>
              <div>
                <input type="radio"
                  name="radio"
                  id="radio"
                  value="Male"
                  checked={radio}
                  onChange={(event) => setRadio(event.target.checked)} />others
              </div>
            </div><br />
            <div className='tel'>
              <input
                title='Type Mobile Number'
                type='tel'
                name='mobileNumber'
                id='mobileNumber'
                placeholder='Enter your mobile number'
                required
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
              />
            </div>
            <br />
            <div className='dropdown'>
              <div>Mother Tongue <FaArrowRight /></div>
              <div>
                <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                  {languages.map((option, index) => {
                    return (
                      <option>{option}</option>
                    )
                  }
                  )}
                </select>
              </div>
            </div><br />
            <div className='remember'>
              <input type='checkbox'
                name='checkbox'
                id='checkbox'
                checked={checkbox}
                onChange={(event) => setCheckbox(event.target.checked)} /><span> Remember me</span>
            </div><br />
            <div className='button'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FuncAppForm;