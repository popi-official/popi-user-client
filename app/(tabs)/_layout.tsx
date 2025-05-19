import CustomBottomTab from '@/components/customBottomTab/CustomBottomTab';
import { Theme } from '@/theme/Theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabBar = (props: BottomTabBarProps) => <CustomBottomTab {...props} />;

export default function BottomTabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ backgroundColor: `#${Theme.colors.gray10}`, flex: 1 }}>
        <Tabs tabBar={tabBar} screenOptions={{ headerShown: false }}>
          <Tabs.Screen name="home" options={{ title: 'Home' }} />
          <Tabs.Screen name="map" options={{ title: 'Map' }} />
          <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
          <Tabs.Screen name="my" options={{ title: 'My' }} />
        </Tabs>
      </SafeAreaView>
    </>
  );
}
