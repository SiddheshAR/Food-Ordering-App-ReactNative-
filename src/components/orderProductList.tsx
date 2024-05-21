import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { defaultPizzaImage } from 'assets/data/products';
import { FontAwesome } from '@expo/vector-icons';
import { useCart } from '@/providers/cartProvider';


const OrderProdList = ({ item }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flex: 1,justifyContent:'center' }}>
        <Text style={styles.title}>{item.products.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>{item.products.price}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 7,
      flex: 1,
      margin:10,
      
    },
    image: {
      width: 60,
      aspectRatio: 1,
      alignSelf: 'center',
      marginRight: 10,
    },
    title: {
      fontWeight: '500',
      fontSize: 16,
      marginBottom: 5,
    },
    subtitleContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    quantitySelector: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginVertical: 10,
    },
    quantity: {
      fontWeight: '500',
      fontSize: 18,
    },
    price: {
      color: Colors.light.tint,
      fontWeight: 'bold',
    },
})

export default OrderProdList