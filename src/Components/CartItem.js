import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover.js"

function CartItem({item}) {
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)

    const trashIconClass = hovered ? `ri-delete-bin-fill` : `ri-delete-bin-line`
    
    return (
        <div className="cart-item">
            <i className={trashIconClass}
                // onMouseLeave={() => setHovered(false)}
                // onMouseEnter={() => setHovered(true)}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >
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