import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import {Routes, Route} from "react-router-dom";
import PageRoute from "./utils/PageRoute";

const MainSite = () => {
	return (
		<div className='container w-[100%] max-w-[100%] flex flex-col justify-end'>
			<Header />
			<PageRoute />
			<Footer />
		</div>
	);
};

export default MainSite;
