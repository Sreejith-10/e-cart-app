import React, {useState} from "react";
import {BsMenuButtonWideFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
	const [nav, setNav] = useState(true);
	const [activeNav, setActiveNav] = useState("")

	return (
		<div className='container max-w-full'>
			<div className='nav flex justify-between align-middle px-[50px] py-[20px] cursor-pointer bg-slate-300'>
				<div className='nav-logo'>
					<h1 className='text-[30px] font-bold hover:text-[#5a8396]'>
						<Link to='/'>E-Cart</Link>
					</h1>
				</div>
				<div className='nav-items hidden md:flex flex-row items-center justify-center'>
					<ul className='flex flex-row justify-around cursor-pointer'>
						<NavLink
							to='/cart'
							className=' text-[20px] font-bold  px-[20px] py-[5px] transition ease-out delay-100 rounded-[20px]  hover:bg-[#a6bec9] hover:rounded-[20px] hover:text-white hover:shadow-sm hover:shadow-black'>
							Cart
						</NavLink>
						<NavLink
							to='/order'
							className=' text-[20px] font-bold px-[20px]  py-[5px] ml-[10px] transition ease-out delay-100 rounded-[20px] hover:bg-[#a6bec9] hover:rounded-[20px]  hover:text-white hover:shadow-sm hover:shadow-black'>
							Order
						</NavLink>
						<NavLink
							to='/favorites'
							className=' text-[20px] font-bold px-[20px]  py-[5px] ml-[10px] transition ease-out delay-100 rounded-[20px] hover:bg-[#a6bec9] hover:rounded-[20px]  hover:text-white hover:shadow-sm hover:shadow-black'>
							Favorites
						</NavLink>
					</ul>
				</div>
				<div className='md:block hidden nav-account'>
					<h1>Account</h1>
				</div>
				<div className='responsive md:hidden p-2'>
					{nav ? (
						<BsMenuButtonWideFill
							onClick={() => setNav(!nav)}
							className='w-[30px] h-[25px] '
						/>
					) : (
						<AiOutlineClose
							onClick={() => setNav(!nav)}
							className='w-[30px] h-[25px] border border-black'
						/>
					)}
				</div>
				<div
					className={
						!nav
							? "w-[100%]  bg-[#5a8396] mobile md:hidden absolute top-[81px] left-[0px]  ease-in-out delay-500"
							: "hidden"
					}>
					<ul className='m-4 flex flex-col'>
						<Link to='/cart' className=' my-[20px]'>
							Cart
						</Link>
						<Link to='/order' className=' my-[20px]'>
							Order
						</Link>
						<Link to='/favorites' className=' my-[20px]'>
							Favorites
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
