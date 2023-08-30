import React, {useState} from "react";

export const CartProductContext = React.createContext();

const CartContext = (props) => {
	const [cartItems, setCartItems] = useState([]);
	let cartLength = cartItems.length;
	let cartTotal = 0;

	cartItems.map((val) => {
		return (cartTotal += val.data.totalPrice);
	});
	return (
		<CartProductContext.Provider
			value={{cartItems, setCartItems, cartLength, cartTotal}}>
			{props.children}
		</CartProductContext.Provider>
	);
};

export default CartContext;
