import React from 'react'

function UserProfile({ name, age, isMember }) {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
         {isMember ? <p>Status: Premium Member</p> : <p>Status: Free Member </p>}
    </div>
  )
}

export default UserProfile