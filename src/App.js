
import './App.css';

 import {useState} from 'react'

function App() {
   const [name, setName] = useState("")

   const [college, setCollege] = useState("")

  return (
    <div className='card'>
       <h1>Form Handling in React</h1>

    <input type="text" value={name} onChange={(e)=>{
      setName(e.target.value);
    }} />
    
    <br/>
    <br/>
    
    <input type='text' 
    value={college} onChange={(e)=>{
      setCollege(e.target.value);

    }} />
    

    <h3>{name}Studying in {college}</h3>

    {/* /* <button type="button">submit</button> 
    <button type="button" onClick={()=>
    setName('')
    }>
      clear</button> */ }
  </div> 


  );
}

export default App;
