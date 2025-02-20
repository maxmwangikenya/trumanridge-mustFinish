import React from 'react'
import '../Hero.css';
import Header from '../Header/Header';

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
</div>

        </div>
        <div className='right-h'>right side</div>
    </div>
  )
}

export default Hero
