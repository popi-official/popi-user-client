import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={DEFAULT_STACK_OPTIONS} />
    </Stack>
  );
}
