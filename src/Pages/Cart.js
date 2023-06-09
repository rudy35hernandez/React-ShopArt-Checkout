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
        <main className="cart-page">
            <h1>Check Out</h1>
            {cartItemElements}
        </main>
    )
}

export default Cart