import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {useLocalSearchParams,Stack} from 'expo-router';

const productPageComp = () => {
    const {id} = useLocalSearchParams();
  return (
    <View style={styles.container} >
        <Stack.Screen options={{'title':`Product ID:${id}`}} />
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