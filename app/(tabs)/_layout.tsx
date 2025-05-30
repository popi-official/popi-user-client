import CustomBottomTab from '@/components/customBottomTab/CustomBottomTab';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';

const screenOptions = { headerShown: false };

const BottomTabLayout = () => {
  const tabBar = useCallback((props: BottomTabBarProps) => <CustomBottomTab {...props} />, []);

  return (
    <>
      <StatusBar style="light" />
      <Tabs tabBar={tabBar} screenOptions={screenOptions}>
        <Tabs.Screen name="home" options={{ title: 'HOME' }} />
        <Tabs.Screen name="map" options={{ title: 'MAP' }} />
        <Tabs.Screen name="cart" options={{ title: 'CART' }} />
        <Tabs.Screen name="my" options={{ title: 'MY' }} />
      </Tabs>
    </>
  );
};

export default React.memo(BottomTabLayout);
