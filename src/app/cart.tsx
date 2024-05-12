import React from 'react'
import {View,Text,StyleSheet, Platform,Modal,Button, FlatList,Image } from 'react-native'
import {StatusBar} from 'expo-status-bar' 
import {Link} from 'expo-router'

import { useContext } from 'react';
import {useCart} from '../providers/cartProvider'

const CartItemShow = ({item})=>{
    return (
        <View>
          <Image
            style={{
              width: '70%',
              aspectRatio: 1,
              resizeMode: 'contain'
            }}
            source={{ uri: item.image }}
          />
          <Text>{item.name}</Text>
        </View>
      );
    };


const cart = ({isVisible}) => {
// const {items} = useContext(CartContext)
    const {items,addItem} =useCart();
  return (
    
    <View>
        <Text>This is the Cart:{items.length} </Text>
        <FlatList 
        data={items}
        renderItem={({item})=><CartItemShow item={item}/>}
        >

        </FlatList>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
   
  )
}

export default cart