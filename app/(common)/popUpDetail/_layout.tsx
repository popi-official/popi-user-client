import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HeaderBackBtn from '@/components/header/headerBackBtn/HeaderBackBtn';
import TicketHeaderRight from '@/components/header/TicketHeaderRight/TicketHeaderRight';

type RouteParams = {
  title?: string;
};

const POPUP_DETAIL_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerTintColor: 'white',
  headerLeft: () => <HeaderBackBtn />,
  headerRight: () => <TicketHeaderRight />,
  headerTitle: () => null,
};

const POPUP_ENTIRE_ITMES_OPTIONS = ({
  route,
}: {
  route: { params?: RouteParams };
}): NativeStackNavigationOptions => ({
  ...DEFAULT_STACK_OPTIONS,
  headerTintColor: 'white',
  headerLeft: () => <HeaderBackBtn />,
  title: route.params?.title || '',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: 'white',
    fontFamily: 'Pretendard-Semibold',
  },
});

export default function PopUpDetailLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={POPUP_DETAIL_OPTIONS} />
      <Stack.Screen name="entireItems/index" options={POPUP_ENTIRE_ITMES_OPTIONS} />
    </Stack>
  );
}
