import React from "react";
import {AiFillHeart} from "react-icons/ai";

const FavoriteProductList = ({val,removeFromFavorite,addToCart}) => {
	return (
		<div className='w-[600px] h-[200px] m-4 bg-slate-500 rounded-[20px] flex flex-row items-center justify-between shadow-black shadow-md'>
			<div className='w-[200px]  h-[190px] ml-1 p-2 '>
				<img
					src={val.data.proImg}
					alt=''
					className='w-[100%] h-[100%] rounded-[10px]'
				/>
			</div>
			<div className='w-[250px] h-[190px] text-start'>
				<h1 className='mt-16 font-medium text-[20px]'>{val.data.proName}</h1>
				<h1 className=' font-medium text-[20px]'>{val.data.proPrice}</h1>
			</div>
			<div className='w-[130px] h-[190px] flex flex-col items-center justify-around'>
				<div className='w-[130px] h-[100px] '>
					<AiFillHeart
						onClick={() => removeFromFavorite(val.data)}
						className='w-[30px] h-[30px] ml-[90px] fill-red-500'
					/>
				</div>
				<div className='mt-[30px] mr-[10px]'>
					{!val.data.cartState ? (
						<button
							onClick={() => addToCart(val.data)}
							className='border text-[16px] font-bold border-white bg-slate-200 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Add To Cart
						</button>
					) : (
						<button
							className='border text-[16px] font-bold border-white bg-slate-200 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Added To Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default FavoriteProductList;
