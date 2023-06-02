import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1 ", "Thing 2"])
 
  function addItem() {
    setThingsArray(prevThingsArray => {
        return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
}
  let thingsElements = thingsArray.map(thing => <p> {thing}</p>)
  
  return (
     <div>
     <button onClick={addItem}> 
      Add Items 
     </button>
     {thingsElements}
     </div>
  );
}

export default App;

 
            