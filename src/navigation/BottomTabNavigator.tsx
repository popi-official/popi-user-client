import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabStackWithParams} from '../@types/StackNavigationType';
import CartScreen from '../screen/CartScreen';
import MapScreen from '../screen/MapScreen';
import MyScreen from '../screen/MyScreen';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator<BottomTabStackWithParams>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CartTab" component={CartScreen} />
      <Tab.Screen name="MapTab" component={MapScreen} />
      <Tab.Screen name="MyTab" component={MyScreen} />
    </Tab.Navigator>
  );
}
