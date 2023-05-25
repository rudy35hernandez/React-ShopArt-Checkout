import React from 'react'

function Image({className, img}){

    const [hovered, setHovered] = React.useState(false)

    return(
        <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {hovered ? <i className="ri-heart-line favorite"></i> : ""}
            {hovered ? <i className="ri-add-circle-line cart"></i>: ""}

        </div>
    )
}

export default Image