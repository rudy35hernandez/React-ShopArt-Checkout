import React from "react"


function CartItem({item}){
    return (
        <h2>
            <img src={item.url}></img>
        </h2>
    )
}

export default CartItem