import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

const productPageComp = () => {
  return (
    <View style={styles.container}>
        <Text>This is Product</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 20,
        
    }
})

export default productPageComp