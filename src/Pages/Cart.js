import React, {useState, useContext} from "react"
import {Context} from "../Context.js"
import CartItem from "../Components/CartItem.js"

function Cart(){
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    const totalCost = cartItems.length * 5.99

    const totalDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(){
        if(cartItems.length > 0){
            setButtonText("Ordering...")
            setTimeout(() => {
                setButtonText("Place Order")
                return emptyCart()
            }, 3000)
        }
    }

    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalDisplay}</p>
            <div className="order-button">
               {cartItems.length > 0 && <button onClick={placeOrder}>{buttonText}</button>} 
            </div>
        </main>
    )
}

export default Cart