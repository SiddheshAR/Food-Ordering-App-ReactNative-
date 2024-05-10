import { StyleSheet,Image,Pressable } from 'react-native';
import {Link} from 'expo-router';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colours from '@/constants/Colors';
import {Product} from 'assets/types';
import CustomButton from '@/components/customButton'

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';
type ProductListProp = {
    product:Product;
  }


 export const ProductListItem = ({product}:ProductListProp)=>{
  const handlePress = () => {
    // Handle button press
  };
    return(
      <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price} Rs</Text>
        {/* <View style={{margin:'auto', backgroundColor:'white' ,paddingVertical:20 }}>
        <CustomButton text={"Buy Now"} href={"./product"}></CustomButton>
        </View> */}
      </Pressable>
      </Link>
    )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        flex: 1,
        borderRadius: 5,
        marginVertical: 5, 
      },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'green',
    textAlign:'center'
  },

  price:{
    color:Colours.light.tint,
    textAlign:'center'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode:'contain'
  },
  shadowProp: {  
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3, 
  }, 
  customButton: {
    backgroundColor: 'green', // Customize button background color here
    marginVertical: 10,
  },
  customButtonText: {
    color: 'white', // Customize text color here
    fontSize: 20,
  },
});
