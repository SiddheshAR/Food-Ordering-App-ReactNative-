import React from 'react'
import {useContext,createContext,useState}  from 'react'; 
import {Product,CartItem} from 'assets/types';

type CartType={
    items:CartItem[];
    addItem:(product:Product ,size: CartItem['size']) => void;
}
const CartContext = createContext<CartType>({
    items:[],
    addItem:()=>{}
});

const CartProvider = ({children}) => {

    const [items,setItems]= useState<CartItem[]>([]);
    const addItem =(product:Product,size:CartItem['size'])=>{
        setItems([product,...items])
    }
  return (
    <CartContext.Provider value={{items,addItem}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = ()=>(useContext(CartContext));
export default CartProvider;