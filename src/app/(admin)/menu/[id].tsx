import React from 'react'
import {View,Text,StyleSheet,Image,Pressable} from 'react-native';
import {useLocalSearchParams,Stack,useRouter} from 'expo-router';
import products from 'assets/data/products';
import {useState} from 'react';
import Button from '@/components/Button';
import { useContext } from 'react';
import { useCart } from '@/providers/cartProvider';
import {PizzaSize,CartItem} from 'assets/types';
import {randomUUID} from 'expo-crypto'
const sizes = ['S','M','L','XL']

const productPageComp = () => {
  const router =useRouter();
  const {items,addItem} = useCart();
  const [selectedSize,setSelectedSize] = useState<PizzaSize>('M')
    const {id} = useLocalSearchParams();
    let Product = products.find((p)=> p.id.toString() === id);

    const addToCart = ()=>{
        if(!Product){
          console.log('Product Doesnt Exists')
        }else{
          let ProductAdded:CartItem={
            id:randomUUID(),
            product:Product,
            product_id:Product.id,
            size:selectedSize,
            quantity:1,
          }
          addItem(Product,selectedSize);
          router.push('/cart')
        }
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

        <Text style={styles.priceStyle}>{Product.price} Rs</Text>
        {/* <Button onPress={addToCart} text="Add to Cart">

        </Button> */}
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