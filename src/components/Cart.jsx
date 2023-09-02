import React, {useContext, useState} from "react";
import {CartProductContext} from "../context/CartContext";
import CartItemList from "./CartItemList";
import {useNavigate} from "react-router-dom"

const Cart = () => {
	let navigate = useNavigate()
	//cart context
	const {cartItems, setCartItems, cartLength, cartTotal} =
		useContext(CartProductContext);
	

	//functions
	const orderFormPage = () =>{
		navigate('/order-form')
	}
	const incrementQuantity = (proId) => {
		let changedItems = cartItems.map((val) => {
			if (proId === val.data.id) {
				val.data.proQuantity += 1;
				val.data.totalPrice = val.data.proQuantity * val.data.proPrice;
				return val;
			} else {
				return val;
			}
		});
		setCartItems(changedItems);
	};
	const decrementQuantity = (proId) => {
		let changedItems = cartItems
			.map((val) => {
				if (proId === val.data.id) {
					val.data.proQuantity -= 1;
					val.data.totalPrice -= val.data.proPrice;
					return val;
				} else {
					return val;
				}
			})
			.filter((val) => {
				if (val.data.proQuantity >= 1) {
					return val;
				} else {
					val.data.proQuantity = 1;
					val.data.totalPrice = val.data.proPrice;
					val.data.cartState = false;
				}
			});
		setCartItems(changedItems);
	};
	const placeOrder = () => {};
	//showing cart list
	let allCartItems = cartItems.map((val) => {
		return (
			<CartItemList
				val={val}
				incrementQuantity={incrementQuantity}
				decrementQuantity={decrementQuantity}
			/>
		);
	});

	return (
		<div className=' container w-auto h-auto md:mx-[200px] md:my-[70px]'>
			<div className='flex items-start justify-center'>
				<h1 className='text-[30px] font-bold'>Your Cart</h1>
			</div>
			<div>
				{cartLength === 0 ? (
					<div className='flex justify-center items-center md:my-[100px]'>
						<h1 className='text-[50px]'>Cart is empty!</h1>
					</div>
				) : (
					<div>
						<div className='my-[50px] flex flex-col items-center'>
							<ul className='flex flex-col justify-around'>{allCartItems}</ul>
						</div>
						<div className='flex flex-col justify-center items-center ml-[33%] mb-[50px] w-[500px] h-[100px] bg-slate-200 border rounded-[10px] shadow-black shadow-sm '>
							<h1 className='mb-2 text-[20px] font-bold'>
								Total Price: Rs {cartTotal}/-
							</h1>
							<div className='w-[100px] h-[40px]'>
									<button
										onClick={()=>orderFormPage()}
										className='bg-green-500 w-[100%] h-[100%] rounded-[10px] font-bold '>
										Place Order
									</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
