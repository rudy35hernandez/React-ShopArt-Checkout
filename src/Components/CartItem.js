import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

function CartItem({item}) {
    const [isHovered, setIsHovered] = useState(false)
    const {removeFromCart} = useContext(Context)

    const trashIconClass = isHovered ? `ri-delete-bin-fill` : `ri-delete-bin-line`
    
    return (
        <div className="cart-item">
            <i className={trashIconClass}
                onMouseLeave={() => setIsHovered(false)}
                onMouseEnter={() => setIsHovered(true)}
                onClick={() => removeFromCart(item.id)}>
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem