import React from 'react'
import {useContext,createContext}  from 'react'; 

export const CartContext = createContext({});

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider value={{items:[1,2,3]}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = ()=>(useContext(CartContext));
export default CartProvider;