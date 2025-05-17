import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyStackWithParams} from '../@types/StackNavigationType';
import MyScreen from '../screen/MyScreen';

const Stack = createNativeStackNavigator<MyStackWithParams>();

export default function MyNavigator() {
  return (
    <Stack.Navigator initialRouteName="My">
      <Stack.Screen name="My" component={MyScreen} />
    </Stack.Navigator>
  );
}
