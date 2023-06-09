import React, {useContext} from "react"
import {Context} from "../Context.js"
import CartItem from "../Components/CartItem.js"

function Cart(){
    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => {
        return (
            <CartItem key={item.id} item={item}/>
        )
    })

    return(
        <div>
            <h2>My Cart Goes Here</h2>
            {cartItemElements}
        </div>
    )
}

export default Cart