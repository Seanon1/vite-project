import React from 'react'
import Greetings from './components/Greetings'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
    <h1>Hello</h1>
    <Greetings name="Dave"/>
    <Greetings />
    <h1>User info</h1>
    <UserProfile name='Jane Doe' age={25} isMember={true}/>
    </>
  )
}

export default App