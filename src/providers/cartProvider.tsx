import React from 'react'
import {useContext,createContext,useState}  from 'react'; 
import {Product,CartItem} from 'assets/types';
import { randomUUID } from 'expo-crypto';
type CartType={
    items:CartItem[];
    addItem:(product:Product ,size: CartItem['size']) => void;
    updateQuantity:(itemID:string,amount: 1 | -1)=>void;
}
const CartContext = createContext<CartType>({
    items:[],
    addItem:()=>{},
    updateQuantity:()=>{}
});

const CartProvider = ({children}) => {

    const [items,setItems]= useState<CartItem[]>([]);
    const addItem =(product:Product,size:CartItem['size'])=>{
        let ProdObject:CartItem = {
            id:randomUUID(), 
            product,
            product_id:product.id,
            size,
            quantity:1
        }
        setItems([ProdObject,...items])
    }
    const updateQuantity=(itemID:string,amount: 1 | -1)=>{
        const updatedItems = items.map((item)=>
        item.id != itemID  ? item : {...item,quantity:item.quantity+amount}
        ).filter((item)=>item.quantity>0)
        
        setItems(updatedItems);
    }
  return (
    <CartContext.Provider value={{items,addItem,updateQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = ()=>(useContext(CartContext));
export default CartProvider;