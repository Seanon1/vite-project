import React from 'react'
import Greetings from './components/Greetings'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter';

function App() {
    const name = "Bob";
    const element = <h2>Hello, {name};</h2>

    // const [state, setState] = useState(initialValue);
     const items = ['Apple', 'Orange', 'Grape'];

  // React Fragments
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <h3>{item}</h3>
          <p>Some fruit</p>
        </React.Fragment>
      ))}
      <h1>Hello</h1>
      <Greetings name="Dave" />
      <Greetings />
      <h1>User info</h1>
      <UserProfile name='Jane Doe' age={25} isMember={true} />
      <Counter/>
    </>
  )
}

export default App