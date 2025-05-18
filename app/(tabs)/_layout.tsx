import { Tabs } from "expo-router";

export default function BottomTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 4 },
        tabBarInactiveTintColor: "#8E8E93",
        tabBarActiveTintColor: "#007AFF",
      }}
    >
      <Tabs.Screen name="home" options={{ title: "홈" }} />
      <Tabs.Screen name="cart" options={{ title: "장바구니" }} />
    </Tabs>
  );
}
