import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <img className='image' src="./Assets/HomeImg.png" alt="HomeImg" />
      <div className="text-container">
      <div className='main-text'>
        You got the travel plans, we <br />got the travel vans.
      </div>
      <div className="text1">Add adventure to your life by joining the #vanlife movement.<br /> Rent the perfect van to make your perfect road trip.</div>
      <button className="btn1">Find Your Van</button>
      </div>
    </div>
  )
}

export default Home
