import Footer from "./components/Footer";
import Header from "./components/Header";
import PageRoute from "./utils/PageRoute";
import CartContext from "./context/CartContext";


const MainSite = () => {
	return (
		<CartContext>
			<div className='container w-[100%] max-w-[100%] flex flex-col justify-end'>
				<Header />
				<PageRoute />
				<Footer />
			</div>
		</CartContext>
	);
};

export default MainSite;
