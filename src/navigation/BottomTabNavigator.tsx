import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabStackWithParams} from '../@types/StackNavigationType';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import MapNavigator from './MapNavigator';
import MyNavigator from './MyNavigator';

const Tab = createBottomTabNavigator<BottomTabStackWithParams>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{lazy: true}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{popToTopOnBlur: true}}
      />
      <Tab.Screen name="MapTab" component={MapNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigator} />
      <Tab.Screen
        name="MyTab"
        component={MyNavigator}
        options={{popToTopOnBlur: true}}
      />
    </Tab.Navigator>
  );
}
