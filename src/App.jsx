import React from 'react'
import Greetings from './components/Greetings'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import ClickHandler from './components/ClickHandler'
import InputHandler from './components/InputHandler'
import FormHandler from './components/FormHandler'
import Greeting from './components/Greeting'
import UserRole from './components/UserRole'
import Image from './components/Image'
import ControlledInput from './components/ControlledInput'
import MultiinputForm from './components/MultiinputForm'

function App() {
  const name = "Bob";
  const element = <h2>Hello, {name};</h2>

  // const [state, setState] = useState(initialValue);
  const items = ['Apple', 'Orange', 'Grape'];

  // React Fragments
  return (
    <>
      {/* {items.map((item, index) => (
        <React.Fragment key={index}>
          <h3>{item}</h3>
          <p>Some fruit</p>
        </React.Fragment>
      ))}
      <h1>Hello</h1>
      <Greetings name="Dave" />
      <Greetings />
      <h1>User info</h1> 
    */}
      <UserProfile />
      <Counter />
      <TodoList />
      <ClickHandler/>
      <InputHandler/>
      <FormHandler/>
      <Greeting isLoggedin={true}/>
      <UserRole role={'Editor'}/>
      <Image/>
      <ControlledInput/>
      <MultiinputForm/>
    </>
  )
}

export default App