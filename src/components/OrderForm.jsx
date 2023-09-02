import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CartProductContext} from "../context/CartContext";

const OrderForm = () => {
	//states
	let navigate = useNavigate();
	const [OrderDetails, setOrderDetails] = useState({
		userName: "",
		userMobile: "",
		userAddress: "",
		userPincode: "",
	});
	const {cartItems, cartTotal, order, setOrder} =
		useContext(CartProductContext);
	//order data submission
	const onChangeHandler = (event) => {
		setOrderDetails(() => ({
			...OrderDetails,
			[event.target.name]: event.target.value,
		}));
	};
	//placing order
	const orderPageHandler = (event) => {
		event.preventDefault();
		setOrder([
			{
				userDetails: OrderDetails,
				cartDetails: cartItems,
				totalPrice: cartTotal,
			},
		]);
		navigate("/order");
	};
	console.log(order);

	return (
		<div className=' w-[400px] h-[400px] rounded-[10px] bg-slate-300 mx-auto my-[100px] '>
			<form className='pt-[25px] pl-[55px]'>
				<div className=' w-[285px] h-[350px] p-[20px] rounded-[5px] bg-white shadow-slate-600 shadow-sm flex flex-col items-center justify-evenly'>
					<div className='flex flex-col '>
						<label htmlFor='name' className='text-sm font-bold mb-3'>
							Name
						</label>
						<input
							type='text'
							name='userName'
							placeholder='Enter your name'
							onChange={onChangeHandler}
							className=' text-sm font-light appearance-none rounded-[5px] p-[3px] shadow-slate-500 shadow-sm focus:outline-none'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='number' className='text-sm font-bold mb-3 mt-3'>
							Phone Number
						</label>
						<input
							type='text'
							name='userMobile'
							placeholder='Enter your Phone number'
							onChange={onChangeHandler}
							className=' text-sm font-light appearance-none rounded-[5px] p-[3px] shadow-slate-500 shadow-sm focus:outline-none'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='address' className='text-sm font-bold mb-3 mt-3'>
							Address
						</label>
						<input
							type='text'
							name='userAddress'
							placeholder='Enter your Address'
							onChange={onChangeHandler}
							className=' text-sm font-light appearance-none rounded-[5px] p-[3px] shadow-slate-500 shadow-sm focus:outline-none'
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='pincode' className='text-sm font-bold mb-3 mt-3'>
							Pincode
						</label>
						<input
							type='text'
							name='userPincode'
							placeholder='Enter your Pincode'
							onChange={onChangeHandler}
							className=' text-sm font-light appearance-none rounded-[5px] p-[3px] shadow-slate-500 shadow-sm focus:outline-none'
						/>
					</div>
					<div className='mt-4 ml-[85px]'>
						<button
							onClick={() => orderPageHandler}
							className='bg-green-700 text-white font-light rounded-[10px] p-[5px] shadow-slate-500 shadow-sm'>
							Place Order
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default OrderForm;
