import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackNavigationType} from '../@types/StackNavigationType';
import BottomTabNavigator from './BottomTabNavigator';
import HomeNavigator from './HomeNavigator';
import TestScreen from '../screen/TestScreen';

const Stack = createNativeStackNavigator<RootStackNavigationType>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}
