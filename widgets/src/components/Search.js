import React,{useState, useEffect} from 'react'
import axios from 'axios'
import apiConfig from '../config'

const Search = ({onSubmit}) =>{
    const [term,setTerm] = useState('programming')
    const [results,setResults] = useState([])

    console.log(results);

    useEffect(()=>{
        const search = async () =>{
            const {data} = await axios.get(apiConfig.URL,{
                params:{
                    action : 'query',
                    list :'search',
                    origin :'*',
                    format : 'json',
                    srsearch : term
                }
            })
            setResults(data.query.search);
        };
     
        search();
    },[term])


    const renderResults = results.map((result=>{
        return <div className="item" key={result.pageid}>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span> 
            </div>
        </div>
    }))


    return <div className="ui segment">
        <div className="ui form" onSubmit={onSubmit}>
            <input 
                className="input" 
                type="text"
                placeholder="Search"
                onChange={e=> setTerm(e.target.value)}
                />

        </div>
        <div className="ui celled list">
            {renderResults}
        </div>
    </div>

}

export default Search 