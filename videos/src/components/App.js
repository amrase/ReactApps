import React from 'react'
import SearchBar from './SearchBar'
import apiConfig from '../config'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'



class App extends React.Component {

    state  = {
        videos : [],
        selectedVideo : null
    }

    componentDidMount() {
        this.handleOnSubmit('buildings')
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
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        })

    }

    onVideoSelect = (video) =>{
        this.setState({
            selectedVideo : video
        })
    }

  
    render(){
        return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit = {this.handleOnSubmit}/>
            <div className="ui grid" >
                <div className="ui row">
                    <div className="eleven wide column">
                         <VideoDetails video = {this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                         <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                    
                </div>
                
            </div>
       
            
        </div>
    }
}

export default App