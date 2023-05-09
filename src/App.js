
import './App.css';

 import {useState} from 'react'

function App() {
   const [name, setName] = useState("")

  return (
    <div>
       <h1>Form Handling in React</h1>

    <input type="text" value={name} onChange={(e)=>{
      setName(e.target.value);
    }} />
    
    <br/>
    <br/>
    <h3>{name}</h3>
    <button type="button">submit</button> 
    <button type="button" onClick={()=>
    setName('')
    }>
      clear</button>
    </div>
  );
}

export default App;
