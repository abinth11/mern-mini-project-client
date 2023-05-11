import { useSelector } from "react-redux";
import React from "react"
import Login from "./Login/SignIn";
const Cart = () => {
    const token = useSelector((state) => state?.authReducer);
    return (
        <div>
            {token ? (
                <div className="cart">
                    <h2>Cart</h2>
                    <p>You have items in your cart.</p>
                </div>
            ) : (
                // <div className="empty-cart" style={{marginTop:"200px"}}>
                //     <h2>Cart</h2>
                //     <p>Your cart is currently empty.</p>
                // </div>
                <Login/>
            )}
        </div>
    )
}
export default Cart