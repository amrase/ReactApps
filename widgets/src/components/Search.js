import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Search = ({onSubmit}) =>{
    const [term,setTerm] = useState('')

    useEffect(()=>{
        const search = async () =>{
            await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action : 'query',
                    list :'search',
                    origin :'*',
                    format : 'json',
                    srsearch : term
                }
            })
        };

        console.log(search);

        search();

    },[term])


    return <div className="ui segment">
        <div className="ui form" onSubmit={onSubmit}>
            <input 
                className="input" 
                type="text"
                placeholder="Search"
                onChange={e=> setTerm(e.target.value)}
                />
        </div>
    </div>

}

export default Search 