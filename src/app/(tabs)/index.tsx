import { StyleSheet,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colours from '@/constants/Colors';
import productData from '../../../assets/data/products';
import {ProductListItem} from '@/components/productListItem';

export default function TabOneScreen() {

  const product= productData[0] ;
  const product2= productData[2] ;

  return (
    <View >
        <ProductListItem product={product} />
        {/* <Text>Hahah</Text> */}
        <ProductListItem product={product2} />

    </View>
  );
}

