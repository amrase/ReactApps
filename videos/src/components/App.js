import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {

    handleOnSubmit = (term) => {
        console.log(term);
    }

    render(){
        return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit = {this.handleOnSubmit}/>
        </div>
    }
}

export default App