import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {CartStackWithParams} from '../../@types/StackNavigationType';

type Props = {
  navigation: NativeStackNavigationProp<CartStackWithParams>;
};

export default function CartScreen({navigation}: Props) {
  return (
    <View>
      <Text>Cart</Text>
      <View>
        <Text onPress={() => navigation.navigate('Test')}>Test</Text>
      </View>
    </View>
  );
}
