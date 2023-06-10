import React from 'react';
import "./Pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contactbody'>
      <div className='contactbox'>
        <div className='flex1'>
          <div className='fl1'></div>
          <div className='fl2'>
            <u>Contact Information:</u><br />
            Email: info@gymname.com<br />
            Phone: +1 555 123-4567<br />
            Address: 123 Main Street, City, State, ZIP<br />
          </div>
        </div>
        <div className='flex2'>
          <div className='fl3'>
            <u>Hours of Operation:</u><br />
            Monday to Friday: 6:00 am - 10:00 pm<br />
            Saturday and Sunday: 8:00 am - 8:00 pm<br />
          </div>
          <div className='fl4'></div>
        </div>
        <div className='flex3'>
          <div className='fl5'></div>
          <div className='fl6'>
            <u>General Inquiries:</u><br />
            To reach us with any general inquiries, please fill out the
            contact form below or use one of the provided contact methods.
            We will get back to you as soon as possible.
          </div>
        </div>
        <div className='flex4'>
          <div className='fl7'>
            <u>Trainer and Staff Directory:</u><br />
            Our knowledgeable trainers and staff are ready to support and guide you
            on your fitness journey. To get in touch with a specific trainer or staff
            member, please refer to our Trainer and Staff Directory.
          </div>
          <div className='fl8'></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;