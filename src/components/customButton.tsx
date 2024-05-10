import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Link} from 'expo-router'
// const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
//     return (
//       <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
//         <Text style={[styles.text, textStyle]}>{title}</Text>
//       </TouchableOpacity>
//     );
//   };

const CustomButton = ({href,text})=>{
    return(
       <Link style={styles.button} href={href}>
        <Text style={styles.text}>{text}</Text>
        </Link>
    )
}
    export default CustomButton;
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#16bd4d',
      paddingHorizontal: 5,
      paddingVertical: 8,
    //   width:'60%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center'
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
