import React from 'react'

const ProfilePicture = () => {
    const imgURL='./src/assets/profile_pic.png';
    const handelClick=(e)=>{
        console.log(e)
        e.target.style.display="none"
    }   
  return (
    <div>
      <img onClick={(e)=> handelClick(e)} src={imgURL} alt="" />
    </div>
  )
}

export default ProfilePicture
