import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component {


    state = {
            lat: null,
            long: null,
            errorMessage : ''
    };
    
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({
                    lat : position.coords.latitude,
                    long : position.coords.longitude,
                   
                })
            },
            err => this.setState({
                errorMessage : err.message
            })
        );
    }

    render(){ 
               
                // No latitude just errorMessage
                if(this.state.errorMessage && !this.state.lat){
                    return <div>{this.state.errorMessage}</div>
                } 
                
                //No errorMessage we have latitude and longitude
                if(!this.state.errorMessage && this.state.lat){
                    return <SeasonDisplay lat={this.state.lat}/>
                }

                //Waiting for data
                return  <Spinner />
            
              
         
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"))