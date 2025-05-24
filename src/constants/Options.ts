import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { View } from 'react-native';
import React from 'react';

export const DEFAULT_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackVisible: false,
  headerBackground: () =>
    React.createElement(View, {
      style: {
        flex: 1,
        backgroundColor: 'black',
        minHeight: 72,
      },
    }),
  contentStyle: {
    gap: 8,
    backgroundColor: 'black',
  },
};
