import React from 'react'
import {View,Text,StyleSheet, Platform,Modal,Button } from 'react-native'
import {StatusBar} from 'expo-status-bar' 
import {Link} from 'expo-router'

import { useContext } from 'react';
import {CartContext,useCart} from '../providers/cartProvider'

const cart = ({isVisible}) => {
// const {items} = useContext(CartContext)
    const {items} =useCart();
  return (
    
    <View>

        <Text>This is the Cart:{items[2]} </Text>
        <Link href={`./menu`}>
            <Button title="Close"></Button>
        </Link>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
   
  )
}

export default cart