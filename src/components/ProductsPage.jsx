import React, {useContext, useState} from "react";
import Products from "../utils/Products";
import Card from "./Card";
import {CartProductContext} from "../context/CartContext";

const ProductsPage = () => {
	//State
	const [product, setProduct] = useState(Products);
	const {cartItems, setCartItems} = useContext(CartProductContext);

	//functions
	const addToCart = (data) => {
		data.cartState = true;
		setCartItems([
			...cartItems,
			{
				data,
			},
		]);
	};

	let proList = product.map((val) => {
		return <Card val={val} addToCart={addToCart} />;
	});
	return (
		<div className='w-auto mx-[30px] my-[30px] md:mx-[200px] sm:w-auto'>
			<ul className='flex flex-wrap'>{proList}</ul>
		</div>
	);
};

export default ProductsPage;
