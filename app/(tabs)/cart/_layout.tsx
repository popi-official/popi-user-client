import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <Slot />
    </SafeAreaView>
  );
}
