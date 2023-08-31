import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <img className='about-img' src="./Assets/AboutImg.png" alt="AboutImg" />
      <div className="about-text-container">
      <div className="mainText">Don’t squeeze in a sedan when<br /> you could relax in a van.</div>
      <div className="about-text1">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />(Hitch costs extra 😉)
      
      <br /><br />Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</div>
      <div className="box">
        <div className="box-text1">Your destination is waiting. <br />Your van is ready.</div>
        <button className="box-btn">Explore our vans</button>
      </div>
      </div>
    </div>
  )
}

export default About
