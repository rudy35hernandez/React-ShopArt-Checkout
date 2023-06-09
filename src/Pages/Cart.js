import React, {useContext} from "react"
import {Context} from "../Context.js"
import CartItem from "../Components/CartItem.js"

function Cart(){
    const {cartItems} = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    const totalCost = cartItems.length * 5.99

    const totalDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {cartItemElements}
            <p className="total-cost">Total: ${totalDisplay}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart