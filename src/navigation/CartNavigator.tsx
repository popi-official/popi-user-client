import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartStackWithParams} from '../@types/StackNavigationType';
import CartScreen from '../screen/CartScreen';
import TestScreen from '../screen/TestScreen';

const Stack = createNativeStackNavigator<CartStackWithParams>();

export default function CartNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}
