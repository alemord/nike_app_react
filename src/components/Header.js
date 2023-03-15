import { ProductContext } from "../App";
import { useContext } from "react";

function Header() {
    const productContextValue = useContext (ProductContext);
const {cart} = productContextValue;


    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart: {cart.length > 0 ? cart.length : 'Empty' } </p>
        </header>
    )
}

export default Header;