import { StyleSheet,Image,FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text,View } from '@/components/Themed';
import productData from 'assets/data/products';
import {ProductListItem} from '@/components/productListItem';

export default function TabOneScreen() {

  const product= productData[0] ;
  const product2= productData[3] ;

  return (
    <View style={{backgroundColor:'#e6e6e6'}}>
      <FlatList 
      data={productData} 
      numColumns={2}
      contentContainerStyle={{gap:10,padding:10}}
      columnWrapperStyle={{gap:10}}
      renderItem={({item})=>(<ProductListItem product={item} />)}/>
        {/* <ProductListItem product={product} /> */}
        {/* <Text>Hahah</Text> */}
        {/* <ProductListItem product={product2} /> */}
        {/* <ProductListItem product={product2} /> */}
    </View>
  );
}

