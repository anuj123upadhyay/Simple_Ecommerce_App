/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */




import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"



//Screens
import  Home from "./screens/Home"
import Details from './screens/Details';

//Root stack parameter

// export type RootStackParamList = {
//   Home : undefined;
//   Profile: {userId : string};
//   Feed : { sort : 'latest ' | 'top ' } | undefined
// } 
// the data that come to you will of this type for navigation


export type RootStackParamList = {
  Home : undefined;
  Details : {product : Product}
}


const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {
 

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen 
    name='Home'
    component={Home}
    options={{
      title:"Trending Products"
    }}
    />
    <Stack.Screen 
    name='Details'
    component={Details}
    options={{
      title:"Product Details"
    }}
    />
    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
