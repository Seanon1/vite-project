import React from 'react'
import image from '../../public/images/Building1.jpg'

function Image() {
  return (
    <div>
        <img src={image}
         alt="Some Building image" 
         style={{
            width: '400px',
            height: '200',
            borderRadius: '10px',
            border: '2px solid yellow'
         }}/>
    </div>
  )
}

export default Image