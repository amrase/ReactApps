import React from 'react'

class SearchBar extends React.Component {

    state = {
        term :''
    }

    handleOnChange =  (e) => {
            this.setState({
            term : e.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    

    render(){
        return <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <input 
                        type="text" 
                        placeholder="Video Search"
                        value = {this.state.term}
                        onChange = {this.handleOnChange}
                        
                    />
                </div>
                
            </form>
        </div>
    }
}

export default SearchBar