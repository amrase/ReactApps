import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lat: null,
            long: null,
            errorMessage : ''
        };
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
        )
    }

    componentDidMount(){
        console.log('mount');
    }

    componentDidUpdate(){
        console.log('update');
    }
    

    render(){ 
               
                // No latitude just errorMessage
                if(this.state.errorMessage && !this.state.lat){
                    return <div>{this.state.errorMessage}</div>
                } 
                
                //No errorMessage we have latitude and longitude
                if(!this.state.errorMessage && this.state.lat){
                    return <div>Latitude :{this.state.lat}</div>
                }

                //Waiting for data
                return <div>Loading!</div>
         
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"))