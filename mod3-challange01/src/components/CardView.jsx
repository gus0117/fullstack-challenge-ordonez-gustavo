import React from 'react'

const CardView = ({image}) => {

  return (
    <div className='color-square'>
        <img src={image} alt="view" />
    </div>
  )
}

export default CardView