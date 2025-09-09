import React from 'react'
import MissionPage from '../Components/MissionPage'
import Footer from '../Components/Footer'
import MissionImg from '../Components/MissionImg'
import "../css/Mission.css";

const Mission = () => {
  return (
    <div>
      <MissionImg/>
      <div className='misssion-Contanior'>
      <MissionPage/>
      <Footer/>
      </div>
    </div>
  )
}

export default Mission