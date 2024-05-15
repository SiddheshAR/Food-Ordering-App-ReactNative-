import { View,Text,StyleSheet,TextInput, Image } from 'react-native'
import React,{useState} from 'react'
import Button from '@/components/Button'
import { defaultPizzaImage } from 'assets/data/products';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';

const CreateProductScreen = () => { 
    const [image, setImage] = useState<string | null>(null);
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [error,setError]=useState('');
    const resetFields =()=>{
        setName('');
        setPrice('');
    }
    const onCreate = ()=>{
        let validity = ValidationCheck();
        if(validity){
            console.warn(`Creating Product Name: ${name}`);
            setError('');
            resetFields();
        }
    }

    function ValidationCheck(){
        if(!name){
            setError("Please Add Name");
            return false;
        }
        if(!price){
            setError("Please Add Price");
            return false;
        }
        if(isNaN(parseInt(price))){
            setError("Please add Valid Price.");
            return false;
        }
        return true;
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:'Create Product'}} />
        <Image style={styles.image} source={{uri: image || defaultPizzaImage }}></Image>
        <Text onPress={pickImage} style={styles.textButton}>Select Image</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput placeholder='Name' value={name} onChangeText={setName} style={styles.input}/>
        <Text style={styles.label}>Price($)</Text>
        
        <TextInput placeholder='9.99' value={price} onChangeText={setPrice} keyboardType='numeric' style={styles.input}/>
        {error?<Text style={{color:'red' ,padding:5}}>{error}</Text>:<></>}
        <Button onPress={onCreate} text='Create'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        marginTop:5,
        marginBottom:20
    },
    label:{
        color:'gray',
        fontSize:16
    },
    image:{
        width:'50%',
        aspectRatio:1,
        alignSelf:'center'
    },
    textButton:{
        color:'#008fe2ed',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:17,
        marginVertical:10
    }
})


export default CreateProductScreen