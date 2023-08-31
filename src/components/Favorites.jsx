import React, {useContext} from "react";
import {CartProductContext} from "../context/CartContext";
import FavoriteProductList from "./FavoriteProductList";

const Favorites = () => {
	const {cartItems, setCartItems, favProduct, setFavProduct, favLength} =
		useContext(CartProductContext); //favorite products

	const removeFromFavorite = (data) => {
		data.favState = false;
		let updateData = favProduct.filter((val) => {
			if (val.data.id != data.id) {
				return val;
			}
		});
		setFavProduct(updateData);
	};
	const addToCart = (data) => {
		console.log(data);
		data.cartState = true;
		setCartItems([
			...cartItems,
			{
				data,
			},
		]);
	};
	let favList = favProduct.map((val) => {
		return (
			<FavoriteProductList
				val={val}
				removeFromFavorite={removeFromFavorite}
				addToCart={addToCart}
			/>
		);
	});
	return (
		<div className='w-auto h-auto mx-[200px]'>
			<div className='my-[30px] text-center'>
				<h1 className='text-[30px] font-bold '>Favorite Products</h1>
			</div>
			{favLength != 0 ? (
				<div className='w-auto'>
					<ul className='flex flex-wrap items-center justify-evenly'>
						{favList}
					</ul>
				</div>
			) : (
				<div className='mx-auto text-center my-10'>
					<h1 className='text-[20px] font-bold'>No favorite items found!</h1>
				</div>
			)}
		</div>
	);
};

export default Favorites;
