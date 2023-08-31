import React, {useContext, useState} from "react";
import Products from "../utils/Products";
import Card from "./Card";
import {CartProductContext} from "../context/CartContext";
import ProductPopUp from "./ProductPopUp";

const ProductsPage = () => {
	//State
	const [product, setProduct] = useState(Products);
	const [popUp, setPopUp] = useState(false);
	const [popUpData, setPopUpData] = useState();
	const {cartItems, setCartItems, favProduct, setFavProduct} =
		useContext(CartProductContext);

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
	const addToFavorite = (data) => {
		data.favState = true;
		setFavProduct([
			...favProduct,
			{
				data,
			},
		]);
	};
	const removeFromFavorite = (data) =>{
		data.favState=false
		let updateData = favProduct.filter((val)=>{
			if(val.data.id!=data.id){
				return val
			}
		})
		setFavProduct(updateData)
	}

	const showProductPopUp = (proData) => {
		setPopUp(true);
		setPopUpData(proData);
	};
	const closePopUp = () => {
		setPopUp(false);
	};

	let proList = product.map((val) => {
		return (
			<Card
				val={val}
				addToCart={addToCart}
				showProductPopUp={showProductPopUp}
				addToFavorite={addToFavorite}
				removeFromFavorite={removeFromFavorite}
			/>
		);
	});
	return (
		<div>
			{!popUp ? (
				<div className='w-auto mx-[30px] my-[30px] md:mx-[200px] sm:w-auto'>
					<ul className='flex flex-wrap'>{proList}</ul>
				</div>
			) : (
				<ProductPopUp
					popUpData={popUpData}
					closePopUp={closePopUp}
					addToCart={addToCart}
				/>
			)}
		</div>
	);
};

export default ProductsPage;
