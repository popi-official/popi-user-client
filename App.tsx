/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import RootProvider from './src/context';
import RootNavigator from './src/navigation';
import {enableScreens} from 'react-native-screens';

enableScreens();

export default function App(): React.JSX.Element {
  return (
    <RootProvider>
      <RootNavigator />
    </RootProvider>
  );
}
