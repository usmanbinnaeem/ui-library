import Input from './components/input/Input'
import Button from './components/button/Button'
import './App.css'

function App() {
  return (
    <div className="App">
      <p> Starting storybook !!</p>

      <p>lets learn!</p>
      <Input size='medium' label='First Name'/>
      <Input size='medium' label='Last Name'/>
      <Input size='medium' label='Password'/>
      <Button label='Secondary' primary = {true}/>
    </div>
  )
}

export default App
