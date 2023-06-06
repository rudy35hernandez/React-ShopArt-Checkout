import React, {useContext} from 'react'
import {Context} from "../Context.js"
import {Link} from "react-router-dom"

function Header(){

    const {cartItems} = useContext(Context)

    function cartFilled(){
        if(cartItems.length > 0){
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        } else {
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {cartFilled()}
            </Link>
        </header>
    )
}

export default Header