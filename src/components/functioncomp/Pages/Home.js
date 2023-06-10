import React from 'react';
import "./Pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <div className='Home'>
      <div className='gym_image'>
        <div className='para'>
          In today's fast-paced world, where sedentary lifestyles and desk-bound jobs have become
          the norm, the importance of physical fitness cannot be overstated. Regular exercise plays
          a crucial role in maintaining optimal health, both physically and mentally. Among the various
          avenues for fitness, the gym stands out as a versatile and effective environment for achieving your
          fitness goals.
        </div>
        <p><span class="marquee-text">Let's go to GYM</span></p>
        <div className='para1'>
          <div className='para1_text'>
            <u>Benefits of Gym Workouts:</u>
            <ul>
              <li>
                Weight Management: Regular gym workouts help in managing body weight by burning
                calories and promoting fat loss. It increases metabolism, which aids in maintaining
                a healthy weight.
              </li>
              <li>
                Cardiovascular Health: Gym workouts involving cardiovascular exercises such as running,
                cycling, and elliptical training improve heart health, lower blood pressure, and reduce
                the risk of heart diseases.
              </li>
              <li>
                Muscle Strength and Endurance: Strength training exercises in the gym help build muscle
                strength, increase bone density, and enhance overall physical performance. Strong muscles
                also improve posture and joint stability.
              </li>
              <li>
                Flexibility and Mobility: Incorporating stretching exercises and yoga in your gym routine
                improves flexibility, joint range of motion, and overall mobility, reducing the risk of injuries
                and improving daily functional movements.
              </li>
            </ul>
            <u>Mental and Emotional Benefits:</u>
            <ul>
              <li>
                Stress Reduction: Engaging in gym workouts helps in reducing stress levels by releasing
                endorphins, the feel-good hormones, and promoting relaxation. It acts as a natural stress
                buster, alleviating anxiety and improving mood.
              </li>
              <li>
                Mental Clarity and Cognitive Function: Exercise stimulates blood flow to the brain,
                enhancing cognitive function, memory, and focus. It also improves sleep patterns, leading
                to increased mental clarity and overall brain health.
              </li>
              <li>
                Boosted Energy and Confidence: Regular workouts in the gym boost energy levels, combatting
                feelings of fatigue and lethargy. Additionally, achieving fitness goals and improving
                physical appearance enhances self-confidence and self-esteem.
              </li>
            </ul>
          </div>
          <div className='footer'>
            <div className='allfooters'>
              <div className='footer1'>
                <div className='footer_heading'>Information</div>
                <div className='footer_inner'>
                  Phone: +1 123 456 7890<br />
                  E-mail: info@website.com<br />
                  website: http://sitename.com
                </div>
              </div>
              <div className='footer2'>
                <div className='footer_heading'>Services</div>
                <div className='footer_inner'>
                  &emsp;&emsp;&emsp;<FontAwesomeIcon icon={faAngleRight} />&emsp;Home<br />
                  &emsp;&emsp;&emsp;<FontAwesomeIcon icon={faAngleRight} />&emsp;Aboutus<br />
                  &emsp;&emsp;&emsp;<FontAwesomeIcon icon={faAngleRight} />&emsp;Projects<br />
                  &emsp;&emsp;&emsp;<FontAwesomeIcon icon={faAngleRight} />&emsp;Contact<br />
                </div>
              </div>
              <div className='footer3'>
                <div className='footer_heading'>Latest Posts</div>
                <div className='footer_inner'>
                  Incorporating stretching exercises and yoga in your gym routine improves flexibility<br />
                  Strength training exercises in the gym help build muscle strength,
                </div>
              </div>
              <div className='footer4'>
                <div className='footer_heading'>Openeing Hours</div>
                <div className='footer_inner'>
                  Monday: 09:00am-10:00pm
                  Tuesday: 08:00am-10:00pm
                  Wedday: 09:00am-10:00pm
                  Thurday: 09:00am-10:00pm
                  Friday:&emsp; 08:00am-12:00pm
                </div>
              </div>
            </div>
            <div className='footer_contacts'>
              <div><FontAwesomeIcon icon={faCopyright} /> Copyright 2023 Crossfit Gym.All Rights Reserved</div>
              <div className='social'>
                <BsFacebook />&emsp;
                <BsTwitter />&emsp;
                <BsLinkedin />&emsp;
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
