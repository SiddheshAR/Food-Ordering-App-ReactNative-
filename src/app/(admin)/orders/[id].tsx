import { Stack, useLocalSearchParams, useSegments } from 'expo-router'
import React from 'react'
import { Text, View,StyleSheet, FlatList, Pressable } from 'react-native'
import orders from 'assets/data/orders'
import dayjs from 'dayjs'
import OrderProdList from '@/components/orderProductList';
import { OrderStatusList } from 'assets/types'
import Colors from '@/constants/Colors'
const OrderDetails = () => {
  const {id} = useLocalSearchParams();
  const currOrder=orders.find(e => e.id == id);

    if(!currOrder){
      return(
        <View style={styles.container}>
          <Stack.Screen options={{'title':`Order Not Found`}} />
          <View style={styles.mainCtn}>
            <Text style={styles.OrderNumber}>Order Not Found</Text>
          </View>
        </View>
      )
    }

    const orderDate = currOrder.created_at;
    const date = dayjs(orderDate)
    const now=dayjs();
    const Segment = useSegments();
    const diffInHours=now.diff(date,'hour');
    const result=`${diffInHours} hours Ago`;

    const OrderItemLists = currOrder.order_items;

  // console.warn(currOrder.status);
  return (
    <View style={styles.container}>
        <Stack.Screen options={{'title':`Order #${currOrder.id}`}} />
        <View style={styles.mainCtn} >
            <View style={styles.firstCtn}>
                <Text style={styles.OrderNumber}>{`Order ${currOrder.id} `}</Text>
                <Text style={styles.OrderDuration}>{result}</Text>
            </View>
            <View style={styles.OrderStatus}>
                <Text style={styles.OrderStatusText}>{currOrder.status}</Text>
            </View>
        </View>
        <View >
      {
        OrderItemLists.length>0 && OrderItemLists ?
          <FlatList 
          // style={styles.ProductListCtn}
          data={OrderItemLists}
          renderItem={({item})=><OrderProdList item={item}/>}
          ListFooterComponent={()=>(
            <>
  <Text style={{ fontWeight: 'bold' }}>Status</Text>
  <View style={{ flexDirection: 'row', gap: 5 }}>
    {OrderStatusList.map((status) => (
      <Pressable
        key={status}
        onPress={() => console.warn('Update status')}
        style={{
          borderColor: Colors.light.tint,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
          // backgroundColor:
            // order.status === status
            //   ? Colors.light.tint
            //   : 'transparent',
        }}
      >
        <Text
          style={{
            // color:
            //   order.status === status ? 'white' : Colors.light.tint,
          }}
        >
          {status}
        </Text>
      </Pressable>
    ))}
  </View>
</>


          )}
          >

          </FlatList>
          :<Text>No Items</Text>
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f1f1f1ec',
    flex:1,
    padding:15
  },
  mainCtn:{
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  firstCtn:{
    gap:5
  },
  OrderStatus:{
    justifyContent:'center',

  },
  OrderNumber:{
    fontWeight:'500',
    fontSize:18
  },
  OrderDuration:{
    color:'#9c9c9c'
  },
  OrderStatusText:{
    fontSize:15
  },
  ProductListCtn:{
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    flex: 1,

  }
})

export default OrderDetails