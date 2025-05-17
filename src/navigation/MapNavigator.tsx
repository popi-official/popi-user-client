import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapStackWithParams} from '../@types/StackNavigationType';
import MapScreen from '../screen/MapScreen';

const Stack = createNativeStackNavigator<MapStackWithParams>();

export default function MapNavigator() {
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
