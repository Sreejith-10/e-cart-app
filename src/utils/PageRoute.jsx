import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from '../components/ProductsPage'
import Cart from '../components/Cart';
import Order from '../components/Order';
import Favorites from '../components/Favorites';
import CartContext from '../context/CartContext';

const PageRoute = () => {
    return (
			<CartContext>
				<Routes>
					<Route exact path='/' element={<ProductsPage />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route exact path='/order' element={<Order />} />
					<Route exact path='/favorites' element={<Favorites />} />
				</Routes>
			</CartContext>
		);
}

export default PageRoute