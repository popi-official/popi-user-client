import CustomBottomTab from '@/components/customBottomTab/CustomBottomTab';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

const tabBar = (props: BottomTabBarProps) => <CustomBottomTab {...props} />;

export default function BottomTabLayout() {
  return (
    <Tabs tabBar={tabBar} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="map" options={{ title: 'Map' }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="my" options={{ title: 'My' }} />
    </Tabs>
  );
}
