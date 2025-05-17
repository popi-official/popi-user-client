import React from 'react';
import {Text, View} from 'react-native';
import {HomeStackWithParams} from '../../@types/StackNavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {S} from './HomeScreen.style';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackWithParams>;
};

export default function HomeScreen({navigation}: Props) {
  return (
    <S.HomeScreenContainer>
      <Text>Home Screen</Text>
      <View>
        <Text onPress={() => navigation.navigate('PopUpList', {PopUpId: 1})}>
          Item1
        </Text>
      </View>
      <View>
        <Text onPress={() => navigation.navigate('Test')}>Test</Text>
      </View>
    </S.HomeScreenContainer>
  );
}
