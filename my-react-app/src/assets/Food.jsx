import React from 'react'

const Food = () => {
    const food1="Orange"
    const food2="Mango"
  return (
    <ul>
        <li>Watermellon</li>
        <li>{food1}</li>
        <li>{food2.toLowerCase() }</li>
    </ul>
  )
}

export default Food