import React from 'react'
import '../Hero.css';
import Header from '../Header/Header';
import heart from '../../assets/heart.png';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
           <Header/>
  {/* the best ad */}
           <div className="the-best-ad">
            <div></div>
            <span>the best adult care center in town </span>
           </div>
  {/* hero heading          */}
  <div className="hero-text">
  <div>
    <span className="stroke-text">Get</span> Best
  </div>
  <div>
    <span> Care Ever</span>
  </div>
  <div>
  <span>At TrumanRidge Adult Care Center, we provide compassionate support, ensuring comfort, dignity, and a fulfilling life for every individual in our care.</span>
</div>
</div>
{/* figure */}
<div className="figures">
  <div>
    <span>+40</span>
    <span>QULIFIED EMPLOYEES</span>
    </div>
  <div>
    <span>+200</span>
    <span>MEMBERS JOINED</span>
    </div>
  <div>
    <span>+200</span>
    <span>SUCCESS STORIES</span>
    </div>
</div>
{/* hero button */}
<div className="hero-buttons">
  <button className='btn'>Join now</button>
  <button className='btn'>learn more</button>
</div>
        </div>
        <div className='right-h'>
  <button className='btn'>Join Now</button>

  <div className="heart-rate1">
    <img src={heart} alt="Heart Icon" />
    <span>Heart Rate</span>
    <span>116 bpm</span>
  </div>
</div>

{/* hero images */}
    </div>
  )
}

export default Hero
