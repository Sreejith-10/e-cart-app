import React, {useState} from "react";

export const CartProductContext = React.createContext();

const CartContext = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [favProduct, setFavProduct] = useState([]);
	const [order, setOrder] = useState([])
	let cartLength = cartItems.length;
	let favLength = favProduct.length
	let cartTotal = 0;
	
	cartItems.map((val) => {
		return (cartTotal += val.data.totalPrice);
	});
	return (
		<CartProductContext.Provider
			value={{cartItems, setCartItems, cartLength, cartTotal,favProduct,setFavProduct,favLength, order, setOrder}}>
			{props.children}
		</CartProductContext.Provider>
	);
};

export default CartContext;
