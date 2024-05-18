import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, Tabs, useRouter } from 'expo-router';
import React,{useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Button from '@/components/Button';

const SignUp = () => {
  const router = useRouter();
const [email,setEmail]=useState<string>('');
const [password,setPassword]=useState<string>('');
  return (
    <View style={styles.container}>
        <Stack.Screen name="" 
        options={{
            title:'Sign Up',
            headerLeft:()=>(
                <Link href="(auth)/sign-in" asChild>
                    <Pressable>
                        {({pressed}) =>(
                            <FontAwesome
                            name="arrow-left"
                            size={24}
                            color={Colors.light.tint}
                            style={{margin:15}}
                            />
                        )}
                    </Pressable>
                </Link>
            )
        }}
        />
            <View style={styles.inputSubCtn}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput placeholder='Johndoe@gmail.com' 
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#b8b8b8ed"
                style={styles.inputField}></TextInput>
            </View>
            <View style={styles.inputSubCtn}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput placeholder=''
                    value={password}
                    onChangeText={setPassword}
                secureTextEntry={true}  style={styles.inputField}></TextInput>
            </View>
            <View>
                <Button text={'Sign Up'}></Button>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    inputField:{
        padding:7,
        backgroundColor:'white',
        borderRadius:5,
        marginLeft:10,
        borderWidth:1,
        borderColor:'#afafafeb',
        color:'#3a3a3aec',
    },
    inputLabel:{
        color:'gray',
        fontSize:15,
        marginLeft:14,
        marginBottom:5
    },
    inputSubCtn:{
        marginVertical:10
    },
    textButton:{
        color:'#0089a1',
        textAlign:'center',
        marginVertical:5,
        fontWeight:'bold',
        fontSize:15
    }
})
export default SignUp