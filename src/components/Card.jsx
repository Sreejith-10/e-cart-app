import { AiFillHeart } from "react-icons/ai";
import {BiHeart} from "react-icons/bi"

const Card = ({val, addToCart, showProductPopUp, addToFavorite, removeFromFavorite }) => {
	return (
		<li key={val.id} className='md:p-[50px] '>
			<div className='w-[200px] h-full  bg-slate-200 rounded-[20px] flex flex-col justify-around items-center sm:my-3 shadow-black shadow-sm'>
				<div className='w-[180px] h-[200px]'>
					<a onClick={() => showProductPopUp(val)}>
						<img
							className='w-[100%] h-[100%] mt-2 rounded-[20px] '
							src={val.proImg}
							alt=''
						/>
					</a>
					<div className=' w-[30px] h-[30px] relative bottom-[190px] left-[140px]'>
						{!val.favState ? (
							<BiHeart
								className='w-[100%] h-[100%] fill-red-500'
								onClick={() => addToFavorite(val)}
							/>
						) : (
							<AiFillHeart
								className='w-[100%] h-[100%] fill-red-500'
								onClick={() => removeFromFavorite(val)}
							/>
						)}
					</div>
				</div>

				<div className='flex flex-col justify-center items-start p-2 w-[180px]'>
					<h1 className='text-[17px] font-bold'>{val.proName}</h1>
					<h3>Rs. {val.proPrice}</h3>
				</div>
				<div>
					{!val.cartState ? (
						<button
							onClick={() => addToCart(val)}
							className='border text-[16px] font-bold border-white bg-slate-500 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Add To Cart
						</button>
					) : (
						<button className='border text-[16px] font-bold border-white bg-slate-500 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Added To Cart
						</button>
					)}
				</div>
			</div>
		</li>
	);
};

export default Card;
