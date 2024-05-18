import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs, useNavigation } from 'expo-router';
import { Pressable,StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (<Stack>
    <Stack.Screen name="index" 
        options={{
          title:'Authentication',
          // headerShown:false,
          tabBarIcon:({ color }) => <TabBarIcon name="user-o" color={color} />,
                // headerLeft: ()=> (
                //   <Pressable onPress={()=>navigation.goBack()}>
                //     <FontAwesome
                //     name="arrow-left"
                //     size={25}
                    
                //     style={styles.BackIcons}
                //     />
                //   </Pressable>
                // )
                  
        }}
        />
    </Stack>);
}

const styles = StyleSheet.create({
  BackIcons:{
    marginLeft:20,
    color:'#04c8d6ec'
  }
})