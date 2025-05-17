import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackWithParams} from '../../@types/StackNavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackWithParams>;
};

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <View>
        <Text onPress={() => navigation.navigate('PopUpList', {PopUpId: 1})}>
          Item1
        </Text>
      </View>
      <View>
        <Text onPress={() => navigation.navigate('Test')}>Test</Text>
      </View>
    </SafeAreaView>
  );
}
