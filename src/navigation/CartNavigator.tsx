import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartStackWithParams} from '../@types/StackNavigationType';
import CartScreen from '../screen/CartScreen';
import TestScreen from '../screen/TestScreen';
import {defaultStackNavOption} from '.';
import GlobalLayout from '../components/Layout/GlobalLayout';

const Stack = createNativeStackNavigator<CartStackWithParams>();

export default function CartNavigator() {
  return (
    <GlobalLayout>
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={defaultStackNavOption}>
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </GlobalLayout>
  );
}
