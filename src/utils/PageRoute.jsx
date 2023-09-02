import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from '../components/ProductsPage'
import Cart from '../components/Cart';
import Order from '../components/Order';
import Favorites from '../components/Favorites';
import OrderForm from '../components/OrderForm';

const PageRoute = () => {
    return (
				<Routes>
					<Route exact path='/' element={<ProductsPage />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route exact path='/order' element={<Order />} />
					<Route exact path='/favorites' element={<Favorites />} />
					<Route exact path='/order-form' element={<OrderForm />} />
				</Routes>
		);
}

export default PageRoute