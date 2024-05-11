import React from 'react'
import {View,Text,StyleSheet,Image,Pressable} from 'react-native';
import {useLocalSearchParams,Stack} from 'expo-router';
import products from 'assets/data/products';
import {useState} from 'react';
import Button from '@/components/Button';
const sizes = ['S','M','L','XL']

const productPageComp = () => {
  // console.log(products[id])
  const [selectedSize,setSelectedSize] = useState('M')
    const {id} = useLocalSearchParams();
    // let ProdID = parseInt(id);
    // if(products[parseInt(id)])
    let Product = products.find((p)=> p.id.toString() === id);

    const addToCart = ()=>{
        console.warn(`User selected:${selectedSize}`)
    }

    if(!Product){
      return(
        <View>
          <Text>Product Not Found.</Text>
        </View>
      )
    }
  return (
    <View style={styles.container} >
        <Stack.Screen options={{'title':`${Product.name}`}} />
        <Image style={styles.image} source={{uri:Product.image}}/>
        <Text style={styles.productTitle}>{Product.name}</Text>
        <Text>Select Size:</Text>

        <View style={styles.sizes}>
        {sizes.map((size,index)=>(
          <Pressable onPress={()=>setSelectedSize(size)} key={index} style={[styles.size,
            {
              backgroundColor: selectedSize == size ? 'gainsboro': 'white'
            }
          ]}>
            <Text style={[styles.sizeText, {color: selectedSize==size?'black':'grey'}]} >{size}</Text>
          </Pressable>))}
        </View>

        <Text style={styles.priceStyle}>{Product.price} Rs</Text>
        <Button onPress={addToCart} text="Add to Cart">

        </Button>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 20,
        flex:1,
        gap:20
    },
    image:{
      width:'100%',
      aspectRatio:1
    },
    productTitle:{
      color:'#011108',
      fontSize:25
    }
    ,priceStyle:{
      color:'green',
      // fontSize:25,
      // fontWeight:'bold'
    }
    ,sizes:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginVertical:10,
    }
    ,size:{
      backgroundColor: 'gainsboro',
      width:40,
      aspectRatio:1,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center'
    },
    sizeText:{
      fontSize:18,
      fontWeight:'500'
    }
})

export default productPageComp