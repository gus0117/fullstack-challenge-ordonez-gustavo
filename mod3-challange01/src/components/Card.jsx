import React from 'react'

const Card = ({ name, status, species, image, setCardInfo }) => {
  return (
    <button className='color-square' onClick={() => setCardInfo(image)}>
        <img src={image} alt="{name}" />
        <h2>{name}</h2>
        <h2>{status}</h2>
        <h2>{species}</h2>
    </button>
  )
}

export default Card;