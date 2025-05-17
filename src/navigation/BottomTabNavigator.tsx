import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabStackWithParams} from '../@types/StackNavigationType';
import MapScreen from '../screen/MapScreen';
import MyScreen from '../screen/MyScreen';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';

const Tab = createBottomTabNavigator<BottomTabStackWithParams>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{lazy: true}}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigator} />
      <Tab.Screen name="MapTab" component={MapScreen} />
      <Tab.Screen name="MyTab" component={MyScreen} />
    </Tab.Navigator>
  );
}
