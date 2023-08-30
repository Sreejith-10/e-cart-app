import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaCopyright,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className='container max-w-[100%] h-auto cursor-pointer'>
			<div className='footer flex flex-col items-center justify-center bg-slate-300 '>
				<div className='footer-icons flex mt-2 h-8 w-auto'>
					<FaFacebook className="w-[70px] h-full"/>
                    <FaInstagram className="w-[70px] h-full"/>
                    <FaTwitter className="w-[70px] h-full"/>
                    <FaYoutube className="w-[70px] h-full"/>
				</div>
				<div className='footer-info mt-2 '>
					<a href='' className="mr-5">About</a>
					<a href=''>Contact Us</a>
				</div>
				<div className='footer-about w-auto flex justify-between'>
					CopyRight 2023 {<FaCopyright className="ml-3 w-4 h-[16px]"/>} : Developed by Sreejith
				</div>
			</div>
		</div>
	);
};

export default Footer;
