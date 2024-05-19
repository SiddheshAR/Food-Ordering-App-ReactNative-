import React from 'react'
import { Text, View,StyleSheet, Pressable, } from 'react-native'
import dayjs from 'dayjs'
import { useSegments ,Link} from 'expo-router';
const OrderListitem = ({item}) => {

    const orderDate = item.created_at;
    const date = dayjs(orderDate)
    const now=dayjs();
    const Segment = useSegments();
    const diffInHours=now.diff(date,'hour')
    const result=`${diffInHours} hours Ago`

  return (
    <Link href={`${Segment[0]}/orders/${item.id}`} asChild>
        <Pressable>
        <View style={styles.objCtn}>
            <View style={styles.childCtn1}>
                <Text style={styles.orderTitle}>Order No. {item.id}</Text>
                <Text  style={styles.orderTime}>{result}</Text>
            </View>
            <View style={styles.childCtn2}>
                <Text  style={styles.orderStatus}>{item.status}</Text>
            </View>
        </View>
        </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
    objCtn:{
        borderRadius:10,
        // borderWidth:0.5,
        backgroundColor:'white',
        padding:10,
        margin:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    orderTitle:{
        fontWeight:'bold',
        fontSize:18,
    },
    orderTime:{
        color:'#636363ec',
        fontSize:15
    },
    childCtn1:{
        gap:6
    },
    childCtn2:{
        justifyContent:'center'
    },
    orderStatus:{
        color:'black',
        fontSize:17,
        fontWeight:'semibold'
    }
})

export default OrderListitem