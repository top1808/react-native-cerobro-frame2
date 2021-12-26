import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingPage, HomePage, ProductPage} from './src/pages'
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from "react-native"

const Stack = createNativeStackNavigator()

const ViewBoxesWithColorAndText = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={LoadingPage}
          options={{
            header: () => {}
          }}
        />
         <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            header: () => {}
          }}
        />
        <Stack.Screen
          name="Best Product"
          component={ProductPage}
          options={{
            header: () => {}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ViewBoxesWithColorAndText;
