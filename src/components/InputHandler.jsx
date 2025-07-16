import React from 'react'

function InputHandler() {
  function handleChange(event) {
    console.log('Typed: ', event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder='Type here...' />
    </div>
  )
}

export default InputHandler