import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackWithParams} from '../@types/StackNavigationType';
import PopUpListScreen from '../screen/PopUpListScreen';
import HomeScreen from '../screen/HomeScreen';
import TestScreen from '../screen/TestScreen';
import {defaultStackNavOption} from '.';
import GlobalLayout from '../components/Layout/GlobalLayout';

const Stack = createNativeStackNavigator<HomeStackWithParams>();

export default function HomeNavigator() {
  return (
    <GlobalLayout>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={defaultStackNavOption}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="PopUpList"
          component={PopUpListScreen}
          options={{...defaultStackNavOption, headerShown: true}}
        />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </GlobalLayout>
  );
}
