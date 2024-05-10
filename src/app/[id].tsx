import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {useLocalSearchParams} from 'expo-router';

const productPageComp = () => {
    const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
        <Text style={{fontSize:20}}>This is Product:{id}</Text>

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