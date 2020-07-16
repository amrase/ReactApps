//Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'


function getTime(){
    return (new Date().toLocaleTimeString())
}


//Create a react component
const App = () =>{
    let labelText="Enter name:"
    let buttonText = 'Click Me!'

    return <div>
       <label className="label" htmlFor="name">
          {labelText}
       </label>
       <input id="name" type="text"/>
       <button style={{backgroundColor:'blue',color:'white'}}>{buttonText}</button>
       <h3>{getTime()}</h3>
    </div>
}


//Take the react component and show it on the screen


ReactDOM.render(<App/>,document.querySelector('#root'));