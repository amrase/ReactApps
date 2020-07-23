import React from 'react'
import Accordion from './components/Accordion'


const items = [
    {
        title : 'What is React?',
        content : 'React is a front end javascript framework '
    },
    {
        title : 'Why use React',
        content : 'React is a favorite JS libray among engineers'
    },
    {
        title : 'How do you use React',
        content : 'Use React by creating components'
    }
]

export default () =>{
    return <div className="ui container" style={{marginTop:"10px"}}>
        <Accordion  items={items}/>
    </div>
}

