import React, {useContext} from 'react'
import {Context} from "../Context.js"
import {Link} from "react-router-dom"

function Header(){

    const {cartItems} = useContext(Context)


    const classForCart = cartItems.length === 0 ? "ri-shopping-cart-line" : "ri-shopping-cart-fill"

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                <i className={`${classForCart} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header