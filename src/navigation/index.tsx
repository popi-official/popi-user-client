import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackNavigationType} from '../@types/StackNavigationType';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackNavigationType>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
