import React from 'react'
import App from '../App'

function Greetings({name = "Guest"}) {
  return (
    <div>
      <p>Hello, { name }</p>
    </div>
  )
}

export default Greetings