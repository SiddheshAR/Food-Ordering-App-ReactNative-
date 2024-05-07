import { StyleSheet,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colours from '@/constants/Colors';




 export const ProductListItem = ({product})=>{
    return(
      <View style={styles.container}>
        <Image source={{uri:product.image}} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        // flex: 1,
        // maxWidth: '50%',
      },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },

  price:{
    color:Colours.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
