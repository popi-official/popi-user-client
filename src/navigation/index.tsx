import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackNavigationType} from '../@types/StackNavigationType';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackNavigationType>();

export const defaultStackNavOption: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {flex: 1},
};

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={defaultStackNavOption}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
