import React from 'react'
import {View,Text,StyleSheet, Platform,Modal, FlatList,Image } from 'react-native'
import {StatusBar} from 'expo-status-bar' 
import {Link} from 'expo-router'
import CartListItem from '@/components/cartItemsList'
import { useContext } from 'react';
import {useCart} from '../providers/cartProvider'
import Button from '@/components/Button'
// const CartItemShow = ({item})=>{
//     return (
//         <View>
//           <Image
//             style={{
//               width: '70%',
//               aspectRatio: 1,
//               resizeMode: 'contain'
//             }}
//             source={{ uri: item.image }}
//           />
//           <Text>{item.name}</Text>
//         </View>
//       );
//     };


const cart = ({}) => {
// const {items} = useContext(CartContext)
    const {items,addItem,totalPrice} =useCart();
  return (
    
    <View>
        <Text>This is the Cart:{items.length} </Text>
        <FlatList 
        contentContainerStyle={{padding:10}}
        data={items}
        renderItem={({item})=><CartListItem cartItem={item}/>}
        >

        </FlatList>
        <Text>{totalPrice}</Text>
        <Button text={`Checkout: ${totalPrice}`}></Button>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
   
  )
}

export default cart