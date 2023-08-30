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
					<Route path='/' element={<ProductsPage />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<Order />} />
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</CartContext>
		);
}

export default PageRoute