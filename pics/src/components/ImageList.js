import React from 'react';
import './ImageList.css'

const ImageList = (props) =>{

    console.log(props.images);

    const image = props.images.map(({id,urls,description})=>{
        return <img  src = {urls.regular} key={id} alt={description}/>
    })


    return <div className="image-list">{image}</div>
}

export default ImageList