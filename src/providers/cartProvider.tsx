import React from 'react'
import {useContext,createContext,useState}  from 'react'; 
import {Product,CartItem} from 'assets/types';
import { randomUUID } from 'expo-crypto';
type CartType={
    items:CartItem[];
    addItem:(product:Product ,size: CartItem['size']) => void;
    updateQuantity:(itemID:string,amount: 1 | -1)=>void;
    totalPrice:number
}
const CartContext = createContext<CartType>({
    items:[],
    addItem:()=>{},
    updateQuantity:()=>{},
    totalPrice:0
});

const CartProvider = ({children}) => {
    
    const [items,setItems]= useState<CartItem[]>([]);
    const totalPrice = items.reduce(
        (sum,item)=>(sum+=item.product.price*item.quantity),0
    )
    const addItem =(product:Product,size:CartItem['size'])=>{

        const ExistingProduct = items.find((x)=>x.product == product && x.size == size);
        if(ExistingProduct){
            const updatedList = items.map((item)=>
            item.product.name != product.name ? item:
            {...item,quantity:item.quantity+1}
            )
            setItems(updatedList);
        }else{
            let ProdObject:CartItem = {
                id:randomUUID(), 
                product,
                product_id:product.id,
                size,
                quantity:1
            }
            setItems([ProdObject,...items]);
        }
    }
    const updateQuantity=(itemID:string,amount: 1 | -1)=>{
        const updatedItems = items.map((item)=>
        item.id != itemID  ? item : {...item,quantity:item.quantity+amount}
        ).filter((item)=>item.quantity>0)
        
        setItems(updatedItems);
    }

  return (
    <CartContext.Provider value={{items,addItem,updateQuantity,totalPrice}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = ()=>(useContext(CartContext));
export default CartProvider;