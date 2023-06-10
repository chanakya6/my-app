import React from 'react';
import "./Pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

const Aboutus = () => {
  return (
    <div className='aboutbody'>
      <div className='aboutgymmm'>
        <div className='title'>
          Welcome to Our GYM!
        </div><br />
        <div className='titlepara1'>
          At Our Gym, we are passionate about helping you achieve your fitness goals
          and leading a healthy lifestyle. Our state-of-the-art facilities, dedicated team,
          and diverse range of programs are designed to provide you with the ultimate fitness experience.
          Whether you're a seasoned fitness enthusiast or just starting your fitness journey, we have everything
          you need to succeed. Our gym is more than just a place to work out; it's a community where you'll find
          motivation, support, and inspiration every step of the way.
        </div>
        <div className='titlepara2'>
          Our commitment to your well-being extends beyond our top-notch equipment and facilities.
          We strive to create an atmosphere that encourages personal growth, fosters connections,
          and promotes a positive mindset. We believe that fitness is not just about physical strength,
          but also about mental and emotional well-being.
          Whether you're looking to build strength, lose weight, improve flexibility, or simply stay
          active, we have a wide range of programs and services to suit your needs. Our experienced team
          of trainers and instructors are here to guide and support you on your fitness journey. They
          are passionate about what they do and are dedicated to helping you achieve your goals safely
          and effectively.
        </div>
        <div className='titlepara3'>
          <div className='titleimage'></div>
          <div className='titleimage1'>
            At Our Gym, we value your feedback and continuously strive to improve our services.
            We listen to our members and adapt to their evolving needs. Our commitment to excellence
            is what sets us apart and drives us to provide you with the best fitness experience possible.<br />
            Thank you for considering [Gym Name] as your fitness destination. We look forward to welcoming
            you to our gym and being a part of your fitness journey. Get ready to transform your life and
            unlock your full potential with us!<br />
            We believe that fitness should be accessible to everyone, which is why we have created a
            welcoming and inclusive environment.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;