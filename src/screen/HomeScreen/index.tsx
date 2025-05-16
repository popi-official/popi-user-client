import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackWithParams} from '../../@types/StackNavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackWithParams>>();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <View>
        <Text onPress={() => navigation.navigate('PopUpList', {PopUpId: 1})}>
          Item1
        </Text>
      </View>
    </SafeAreaView>
  );
}
