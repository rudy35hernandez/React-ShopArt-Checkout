import React from 'react'
import {Context} from "../Context.js"

function Image({className, img}){

    const [hovered, setHovered] = React.useState(false)
    const {toggleFavorite} = React.useContext(Context)

    // const heartIcon = hovered ? <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i> : ""
    const cartIcon = hovered ? <i className="ri-add-circle-line cart"></i>: ""

    function heartToggle(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    return(
        <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartToggle()}
            {cartIcon}
        </div>
    )
}

export default Image