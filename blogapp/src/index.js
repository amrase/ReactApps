import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'
import faker from 'faker'

const App = () =>{
    return (
        <div className="ui cards">
           <CommentDetails author="Sam" timeAgo="Time at 6:00PM" avatar={faker.image.avatar()}/>
           <CommentDetails author="Alex" timeAgo="Time at 1:00PM" avatar={faker.image.avatar()}/>
           <CommentDetails author="Jane" timeAgo="Time at 2:00PM" avatar={faker.image.avatar()} />
           <CommentDetails author="Bryan" timeAgo="Time at 3:00PM" avatar={faker.image.avatar()} />
           <CommentDetails author="Rebecca" timeAgo="Time at 4:00PM" avatar={faker.image.avatar()}/>
        </div>
   )
}

ReactDOM.render(<App/>,document.querySelector('#root'))