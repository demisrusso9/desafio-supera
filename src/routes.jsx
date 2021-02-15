import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CartContext } from './helpers/CartContext'

import Home from './pages/Home'
import Checkout from './pages/Checkout'

const Routes = () => {
   const [cart, setCart] = useState(
      JSON.parse(localStorage.getItem('cart')) || []
   )

   return (
      <BrowserRouter>
         <CartContext.Provider value={{ cart, setCart }}>
            <Route path='/' exact>
               <Home />
            </Route>
            <Route path='/checkout'>
               <Checkout />
            </Route>
         </CartContext.Provider>
      </BrowserRouter>
   )
}

export default Routes
