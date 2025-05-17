import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapStackWithParams} from '../@types/StackNavigationType';
import MapScreen from '../screen/MapScreen';
import GlobalLayout from '../components/Layout/GlobalLayout';
import {defaultStackNavOption} from '.';

const Stack = createNativeStackNavigator<MapStackWithParams>();

export default function MapNavigator() {
  return (
    <GlobalLayout>
      <Stack.Navigator
        initialRouteName="Map"
        screenOptions={defaultStackNavOption}>
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </GlobalLayout>
  );
}
