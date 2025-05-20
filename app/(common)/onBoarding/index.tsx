import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { S } from './OnBoardingScreen.style';
import { OnBoardingData } from '@/constants/OnBoarding';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useRouter } from 'expo-router';

export default function OnBoardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const upDownAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startFloatingAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(upDownAnim, {
            toValue: -15,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(upDownAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startFloatingAnimation();

    return () => {
      upDownAnim.stopAnimation();
    };
  }, [upDownAnim]);

  const handleNext = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      if (currentIndex < OnBoardingData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        router.push('/(tabs)/home');
        return;
      }

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const currentData = OnBoardingData[currentIndex];

  return (
    <S.OnBoardingScreenContainer>
      <S.BackgroundImageContainer>
        <S.BackgroundImage source={currentData.backgroundImg} resizeMode="cover" />
      </S.BackgroundImageContainer>

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <S.ContentWrapper>
          <S.IllustrationContainer>
            <Animated.View style={{ transform: [{ translateY: upDownAnim }] }}>
              <S.IllustrationImage source={currentData.contentImg} resizeMode="contain" />
            </Animated.View>
          </S.IllustrationContainer>

          <S.ContentTextContainer>
            <S.ContentText>{currentData.text}</S.ContentText>
          </S.ContentTextContainer>

          <S.ButtonContainer>
            <CustomGradientBtn
              title={currentIndex === OnBoardingData.length - 1 ? '시작하기' : '다음'}
              onPress={handleNext}
              width={330}
              height={56}
            />
          </S.ButtonContainer>
        </S.ContentWrapper>
      </Animated.View>
    </S.OnBoardingScreenContainer>
  );
}
