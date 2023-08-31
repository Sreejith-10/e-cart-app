import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const ProductPopUp = ({popUpData, closePopUp, addToCart}) => {
	return (
		<div className='w-full h-full'>
			<div className='w-[700px] h-[574px] bg-slate-200 mx-auto my-[100px] border rounded-[20px] shadow-black shadow-sm '>
				<div className='flex flex-row justify-between p-2'>
					<div className='w-[300px] h-[300px]'>
						<img
							src={popUpData.proImg}
							alt=''
							className='w-[100%] h-[100%] rounded-[20px]'
						/>
					</div>
					<div className='w-[290px] h-[200px] flex flex-col justify-center'>
						<h2 className='text-[30px] font-bold'>{popUpData.proName}</h2>
						<h3 className='text-[30px] font-bold'>
							Rs. {popUpData.proPrice}/-
						</h3>
					</div>
					<div className='border-[2px] border-black w-[42px] h-[42px]'>
						<AiOutlineClose
							className='w-[40px] h-[40px] m-0 cursor-pointer'
							onClick={closePopUp}
						/>
					</div>
				</div>
				<div className='p-2'>
					<p className='text-[20px]'>{popUpData.proDescription}</p>
				</div>
				<div className='relative top-[50px] left-[565px]'>
					{!popUpData.cartState ? (
						<button
							onClick={() => addToCart(popUpData)}
							className='border text-[16px] font-bold border-white bg-slate-500 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Add to Cart
						</button>
					) : (
						<button
							className='border text-[16px] font-bold border-white bg-slate-500 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Added to Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductPopUp;
