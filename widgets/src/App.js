import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'


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

const onFormSubmit = (term) =>{
    console.log('App',term);
}

export default () =>{
    return <div className="ui container" style={{marginTop:"10px"}}>
        <Search onSubmit={onFormSubmit}/>
        <Accordion  items={items}/>
    </div>
}

