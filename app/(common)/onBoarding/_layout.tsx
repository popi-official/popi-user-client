import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';
import { S } from './OnBoardingScreen.style';

export default function OnBoardingLayout() {
  return (
    <S.OnBoardingContainer>
      <Stack screenOptions={DEFAULT_STACK_OPTIONS}>
        <Stack.Screen name="onBoarding" />
      </Stack>
    </S.OnBoardingContainer>
  );
}
