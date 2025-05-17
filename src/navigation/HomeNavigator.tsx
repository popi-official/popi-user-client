import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackWithParams} from '../@types/StackNavigationType';
import PopUpListScreen from '../screen/PopUpListScreen';
import HomeScreen from '../screen/HomeScreen';
import TestScreen from '../screen/TestScreen';

const Stack = createNativeStackNavigator<HomeStackWithParams>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PopUpList" component={PopUpListScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}
