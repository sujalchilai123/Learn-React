import React from 'react'
import profile_pic from './assets/2.png'
const Card = () => {
  return (
    <div className="Card">
        <img className='card-image' src={profile_pic} alt="Profile Picture" />
        <h2 className='card-title'>Sujal Chilai</h2>
        <p className='card-text'>I am an Electronics Engineer</p>

    </div>
  )
}

export default Card