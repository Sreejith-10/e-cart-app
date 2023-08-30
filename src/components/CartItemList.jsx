import React from "react";

const CartItemList = ({val, incrementQuantity, decrementQuantity}) => {
	return (
		<li className='pt-5'>
			<div className='bg-slate-200 w-[850px] h-[200px] flex flex-row justify-evenly items-center rounded-[10px] shadow-black shadow-sm '>
				<div className='w-[150px] h-[150px]'>
					<img
						src={val.data.proImg}
						alt=''
						className='w-[100%] h-[100%] rounded-[10px] '
					/>
				</div>
				<div className='w-[280px] h-[100px] flex flex-col items-center mt-[50px] '>
					<h3 className='mb-3 font-bold text-[20px]'>{val.data.proName}</h3>
					<h3 className='text-[20px]'>Rs. {val.data.proPrice}/-</h3>
				</div>
				<div className='flex flex-row justify-around items-center w-[150px] h-[50px]  '>
					<button
						onClick={() => decrementQuantity(val.data.id)}
						className='border-2 font-bold bg-white w-[35px] h-[35px] rounded-[10px] border-slate-600 hover:bg-slate-600'>
						-
					</button>
					<p className='text-[15px] font-bold'>{val.data.proQuantity}</p>
					<button
						onClick={() => incrementQuantity(val.data.id)}
						className='border-2 border-slate-600 font-bold bg-white w-[35px] h-[35px] rounded-[10px] hover:bg-slate-600 '>
						+
					</button>
				</div>
				<div>
					<h3 className='mb-3 mt-3 font-bold text-[20px]'>
						Total Product Price
					</h3>
					<h3 className='text-[20px]'>Rs. {val.data.totalPrice}/-</h3>
				</div>
			</div>
		</li>
	);
};

export default CartItemList;
