import React from 'react'
import {Context} from "../Context.js"
import PropTypes from "prop-types"

function Image({className, img}){

    const [hovered, setHovered] = React.useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = React.useContext(Context)

    
    

    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        } else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

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
            {cartIcon()}
        </div>
    )

}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image