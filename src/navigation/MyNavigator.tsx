import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyStackWithParams} from '../@types/StackNavigationType';
import MyScreen from '../screen/MyScreen';
import GlobalLayout from '../components/Layout/GlobalLayout';
import {defaultStackNavOption} from '.';

const Stack = createNativeStackNavigator<MyStackWithParams>();

export default function MyNavigator() {
  return (
    <GlobalLayout>
      <Stack.Navigator
        initialRouteName="My"
        screenOptions={defaultStackNavOption}>
        <Stack.Screen name="My" component={MyScreen} />
      </Stack.Navigator>
    </GlobalLayout>
  );
}
