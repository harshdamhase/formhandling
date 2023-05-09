
import './App.css';

import {useState} from 'react'
// import Student from './Student';

function App() {
  const [name, setName] = useState("")

  return (
    <div>

      <h1>Form Handling in React</h1>

      <input type="text" value={name} /><br />
      <br />
      <button type="button">submit</button>
    </div>
  );
}


export default App;