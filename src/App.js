import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/product';
import { CartContext } from './contexts/cart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// keeps existing cart state and 
	// adds the new item to the cart
	const addItem = item => {
		console.log(item)
		setCart([...cart, item])
		// TODO - duplicate items can only be added
		// if product inventory is greater than 2
		
		// TODO - decrease product inventory (quantity)
	};

	return (
		// [name]Context.Provider value => inital context state
		<div className="App">
			<CartContext.Provider value={{cart}}>
				<Navigation cart={cart} />
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>

			<CartContext.Provider value={{cart}}>
				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
