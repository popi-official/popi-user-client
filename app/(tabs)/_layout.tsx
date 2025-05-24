import CustomBottomTab from '@/components/customBottomTab/CustomBottomTab';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const tabBar = (props: BottomTabBarProps) => <CustomBottomTab {...props} />;

export default function BottomTabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs tabBar={tabBar} screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" options={{ title: 'HOME' }} />
        <Tabs.Screen name="map" options={{ title: 'MAP' }} />
        <Tabs.Screen name="cart" options={{ title: 'CART' }} />
        <Tabs.Screen name="my" options={{ title: 'MY' }} />
      </Tabs>
    </>
  );
}
