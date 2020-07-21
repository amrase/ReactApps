import React from 'react'
import SearchBar from './SearchBar'
import apiConfig from '../config'
import youtube from '../api/youtube'
import VideoList from './VideoList'



class App extends React.Component {

    state  = {
        videos : []
    }

    handleOnSubmit = async (term) => {
        const response = await youtube.get("/search",{
            params : {
                q : term,
                part : 'snippet',
                type : 'video',
                maxResults : 5,
                key : apiConfig.API_KEY
            }
        })

        this.setState({
            videos : response.data.items
        })


    }

  
    render(){
        return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit = {this.handleOnSubmit}/>
            <VideoList videos={this.state.videos}/>
        </div>
    }
}

export default App