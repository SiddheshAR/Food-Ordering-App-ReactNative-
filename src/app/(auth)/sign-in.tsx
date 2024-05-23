import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, Tabs, useRouter } from 'expo-router';
import React,{useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native';
import Button from '@/components/Button';
import { supabase } from '@/lib/supabase';
const SignIn = () => {
  const router = useRouter();
  const [email,setEmail]=useState<string>('');
  const [password,setPassword]=useState<string>('');
  const [loading,setLoading] =useState(false);

const signInWithEmail =async()=>{
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) Alert.alert(error.message);
      setLoading(false);
}
  return (
    <View style={styles.container}>
        <Stack.Screen name="" 
        options={{
            title:'Sign In'
        }}
        />
            <View style={styles.inputSubCtn}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput placeholder='Johndoe@gmail.com' 
                placeholderTextColor="#b8b8b8ed"
                value={email}
                onChangeText={setEmail}
                style={styles.inputField}></TextInput>
            </View>
            <View style={styles.inputSubCtn}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput placeholder='' 
                secureTextEntry={true} 
                value={password}
                onChangeText={setPassword}
                style={styles.inputField}></TextInput>
            </View>
            <View>
                <Button onPress={signInWithEmail} disabled={loading} text={'Sign in'}></Button>
                <Text style={styles.textButton}><Link href={'/sign-up'}>Create an account</Link></Text>
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
export default SignIn