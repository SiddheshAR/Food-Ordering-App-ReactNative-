import { View,Text,StyleSheet,TextInput, Image ,Alert} from 'react-native'
import React,{useState} from 'react'
import Button from '@/components/Button'
import { defaultPizzaImage } from 'assets/data/products';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => { 
    const {id} = useLocalSearchParams();
    const [image, setImage] = useState<string | null>(null);
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [error,setError]=useState('');
    const isUpdating = !!id;
    const resetFields =()=>{
        setName('');
        setPrice('');
    }
    function onDelete(){
        console.warn("Delete!!!!!")
    }
    function confirmDelete(){
        Alert.alert('Confirm',"Are you sure? You want to Delete this Product",[
            {
                text:'Cancel',
            },{
                text:'Delete',
                style:'destructive',
                onPress:onDelete
            }
        ])
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
    const onCreate = ()=>{
        let validity = ValidationCheck();
        if(validity){
            console.warn(`Creating Product Name: ${name}`);
            setError('');
            resetFields();
        }
    }
    const onUpdate = ()=>{
        let validity = ValidationCheck();
        if(validity){
            console.warn(`Updating Product: ${name}`);
            setError('');
            resetFields();
        }
    }

    function onSubmit(){
        if(isUpdating){
            onUpdate()
        }else{
            onCreate()
        }
    }
    // console.log(id);jj

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:`${isUpdating?'Update':'Create'} Product`}} />
        <Image style={styles.image} source={{uri: image || defaultPizzaImage }}></Image>
        <Text onPress={pickImage} style={styles.textButton}>Select Image</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput placeholder='Name' value={name} onChangeText={setName} style={styles.input}/>
        <Text style={styles.label}>Price($)</Text>
        
        <TextInput placeholder='9.99' value={price} onChangeText={setPrice} keyboardType='numeric' style={styles.input}/>
        {error?<Text style={{color:'red' ,padding:5}}>{error}</Text>:<></>}
        <Button onPress={onSubmit} text={`${isUpdating?'Update':'Create'}`}></Button>
        {isUpdating?<Text onPress={confirmDelete} style={styles.deleteButton}>Delete Item</Text>:<></>}
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
    },
    deleteButton:{
        color:'#c90000ed',
        alignSelf:'center',
        fontSize:18
    }
})


export default CreateProductScreen