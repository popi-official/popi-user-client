import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStackNavigationType} from '../@types/StackNavigationType';

export const navigationRef =
  createNavigationContainerRef<RootStackNavigationType>();

export default function CustomNavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
  );
}
