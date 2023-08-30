const Card = ({val, addToCart}) => {
	return (
		<li key={val.id} className='md:p-[50px] '>
			<div className='w-[200px] h-full md:w-[100px] bg-slate-200 rounded-[20px] flex flex-col justify-around items-center sm:my-3 shadow-black shadow-sm'>
				<div className='w-[180px] h-[200px]'>
					<img
						className='w-[100%] h-[100%] mt-2 rounded-[20px] '
						src={val.proImg}
						alt=''
					/>
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
						<button
							className='border text-[16px] font-bold border-white bg-slate-500 rounded-[10px] mb-4 p-2 hover:bg-slate-300 border-none shadow-black shadow-sm'>
							Added To Cart
						</button>
					)}
				</div>
			</div>
		</li>
	);
};

export default Card;
