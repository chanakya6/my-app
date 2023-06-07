import React from 'react';
import './home.css';


const Home = () => {
  return (
    <div>
    <div style={{display:'flex' ,paddingTop:"20px"}}>
      <div style={{flex:"2"}}>
        <img src='https://image.freepik.com/free-photo/various-spices-bowls-black-concrete-surface-top-view-copy-space_87742-15093.jpg' alt='food'
      width={"50%"}
     style={{border: "1px solid #ddd",
      borderradius: "6px",
      padding: "10px",
      paddingTop:"10px",
      width: "60%",}}/>
    </div>
    <div style={{flex:"3"}} >
      <div >
        
          <h1 className='title'>
          <span className='title-word title-word-1'>HELLO  </span>
          <span className='title-word title-word-2'>F&#128525;&#129316;die</span>
          <span className='title-word title-word-3'>......!</span>
          </h1>
          
      <span id="para">"A traditional Indian dish, biryani is made with lightly spiced rice and meat or vegetables.
         This recipe for chicken biryani is the perfect meal for busy midweek days."</span>
    </div>
  </div>
  </div></div>
  )
}

export default Home;