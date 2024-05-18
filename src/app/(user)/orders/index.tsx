import { Stack } from 'expo-router'
import React from 'react'
import { Text, View,FlatList } from 'react-native'
import OrderListitem from '@/components/orderListitem'
import orders from 'assets/data/orders'
const index = () => {
  return (
    <View style={{backgroundColor:'#f5f5f5ec',flex:1}}>
        <Text>Index Page</Text>
        <FlatList 
        data={orders}
        renderItem={({item})=> <OrderListitem item={item} />}
        >
        </FlatList>

    </View>
  )
}

export default index