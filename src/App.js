import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

const [num, setNum] =useState(0)

     
const onArt =()=>{
  return(
    setNum(num + 1)
  )
}
 const onAzalt =()=>{
   return(
     setNum(num-1)
   )
 }

  return (
    <div className="App">
 

<button onClick={onArt}>artir</button>
<button onClick={onAzalt}>ayalt</button>
   <p>{num}</p>
    </div>
  );
}

export default App;
