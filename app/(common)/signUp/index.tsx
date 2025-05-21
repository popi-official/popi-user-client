import {
  Animated,
  Easing,
  Keyboard,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { S } from './SignUpScreen.style';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

const images = {
  backGround: require('@/assets/images/signUp/background.png'),
  downArrow: require('@/assets/images/signUp/down-arrow.png'),
  check: require('@/assets/images/signUp/check.png'),
  close: require('@/assets/images/signUp/close.png'),
};

type AgeType = '10대' | '20대' | '30대' | '40대 이상' | null;
type GenderType = '여성' | '남성' | null;

const SignUpDesc: Record<number, string> = {
  1: '안녕하세요! \n어떻게 불러드리면 될까요?',
  2: '연령대를 선택해주세요',
  3: '성별을 알려주세요',
};

export default function SignUpScreen() {
  const [step, setStep] = useState<number>(1);
  const [nickName, setNickName] = useState<string>('');
  const [age, setAge] = useState<AgeType>(null);
  const [gender, setGender] = useState<GenderType>(null);
  const ageBottomSheetRef = useRef<BottomSheet>(null);
  const genderBottomSheetRef = useRef<BottomSheet>(null);
  const textInputRef = useRef<TextInput>(null);

  const AGE_OPTIONS: Exclude<AgeType, null>[] = ['10대', '20대', '30대', '40대 이상'];
  const GENDER_OPTIONS: Exclude<GenderType, null>[] = ['여성', '남성'];

  const titleAniRef = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const ageSnapPoints = useMemo(() => ['30%'], []);
  const genderSnapPoints = useMemo(() => ['45%'], []);

  const handleAnimate = useCallback(() => {
    Animated.timing(titleAniRef, {
      toValue: 0,
      duration: 180,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      setTimeout(() => {
        Animated.timing(titleAniRef, {
          toValue: 1,
          duration: 320,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }).start();
      }, 80);
    });
  }, [titleAniRef]);

  useEffect(() => {
    handleAnimate();
  }, [step, handleAnimate]);

  const handleAgeSnapPress = useCallback((index: number) => {
    Keyboard.dismiss();
    genderBottomSheetRef.current?.close();
    ageBottomSheetRef.current?.snapToIndex(index);
  }, []);

  const handleAgeClosePress = useCallback((selectedAge: AgeType) => {
    setAge(selectedAge);
    ageBottomSheetRef.current?.close();
  }, []);

  const handleGenderSnapPress = useCallback((index: number) => {
    Keyboard.dismiss();
    ageBottomSheetRef.current?.close();
    genderBottomSheetRef.current?.snapToIndex(index);
  }, []);

  const handleGenderClosePress = useCallback((selectedGender: GenderType) => {
    setGender(selectedGender);
    genderBottomSheetRef.current?.close();
  }, []);

  const handleBtnPress = useCallback(() => {
    if (step === 3) {
      router.replace({
        pathname: '/(common)/signUp/views/SuccessScreen',
        params: { nickName },
      });
      return;
    }
    setStep(prev => prev + 1);
  }, [router, step, nickName]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    [],
  );

  const closeAgeBottomSheet = useCallback(() => {
    ageBottomSheetRef.current?.close();
  }, []);

  const closeGenderBottomSheet = useCallback(() => {
    genderBottomSheetRef.current?.close();
  }, []);

  const validateStep = () => {
    if (step === 1) {
      return nickName && true;
    }
    if (step === 2) {
      return age && true;
    }
    if (step === 3) {
      return nickName && age && gender;
    }
    return false;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <S.SignUpScreenContainer>
          <S.BackgroundImageContainer>
            <S.BackgroundImage source={images.backGround} resizeMode="cover" />
          </S.BackgroundImageContainer>
          <S.ContentWrapper>
            <S.TitleText
              style={{
                opacity: titleAniRef,
                transform: [
                  {
                    translateY: titleAniRef.interpolate({
                      inputRange: [0, 1],
                      outputRange: [15, 0],
                    }),
                  },
                ],
              }}
            >
              {SignUpDesc[step]}
            </S.TitleText>

            <S.FormContent>
              <S.InputSection>
                <S.InputLabel>닉네임</S.InputLabel>
                <S.InputTouchable
                  onPress={() => {
                    if (textInputRef.current) {
                      textInputRef.current.focus();
                    }
                  }}
                >
                  <S.StyledTextInput
                    ref={textInputRef}
                    placeholder="닉네임을 입력해주세요"
                    onChangeText={(e: string) => setNickName(e)}
                    value={nickName}
                  />
                  {nickName.length > 0 && (
                    <S.ClearButton onPress={() => setNickName('')}>
                      <S.CloseIcon source={images.close} />
                    </S.ClearButton>
                  )}
                </S.InputTouchable>
              </S.InputSection>

              {step >= 2 && (
                <S.InputSection>
                  <S.InputLabel>연령대</S.InputLabel>
                  <S.InputWrapper>
                    <S.SelectButton onPress={() => handleAgeSnapPress(0)}>
                      <S.SelectText isSelected={!!age}>{age || ''}</S.SelectText>
                      <S.ArrowIcon source={images.downArrow} />
                    </S.SelectButton>
                  </S.InputWrapper>
                </S.InputSection>
              )}

              {step >= 3 && (
                <S.InputSection>
                  <S.InputLabel>성별</S.InputLabel>
                  <S.InputWrapper>
                    <S.SelectButton onPress={() => handleGenderSnapPress(0)}>
                      <S.SelectText isSelected={!!gender}>{gender || ''}</S.SelectText>
                      <S.ArrowIcon source={images.downArrow} />
                    </S.SelectButton>
                  </S.InputWrapper>
                </S.InputSection>
              )}
            </S.FormContent>
            <S.ButtonContainer>
              <CustomGradientBtn
                onPress={handleBtnPress}
                title={step !== 3 ? '다음' : '완료'}
                style={{ height: 56 }}
                disabled={!validateStep()}
              />
            </S.ButtonContainer>
          </S.ContentWrapper>

          <BottomSheet
            ref={ageBottomSheetRef}
            snapPoints={genderSnapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={true}
            index={-1}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
              backgroundColor: '#1C1B28',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
            handleStyle={{
              backgroundColor: '#1C1B28',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderColor: '#D9D9D9',
              borderBottomWidth: 0,
            }}
            handleIndicatorStyle={{ backgroundColor: '#555555', width: 60 }}
          >
            <S.BottomSheetContent>
              <S.BottomSheetHeader>
                <S.BottomSheetTitle>연령대를 선택해주세요</S.BottomSheetTitle>
                <S.CloseButton onPress={closeAgeBottomSheet}>
                  <S.CloseIcon source={images.close} />
                </S.CloseButton>
              </S.BottomSheetHeader>

              {AGE_OPTIONS.map((item, idx) => (
                <S.OptionButton key={idx} onPress={() => handleAgeClosePress(item)}>
                  <S.OptionText isSelected={age === item}>{item}</S.OptionText>
                  {age === item && <S.CheckText>✓</S.CheckText>}
                </S.OptionButton>
              ))}
            </S.BottomSheetContent>
          </BottomSheet>

          <BottomSheet
            ref={genderBottomSheetRef}
            snapPoints={ageSnapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={true}
            index={-1}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
              backgroundColor: '#1C1B28',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderColor: '#D9D9D9',
              borderBottomWidth: 0,
            }}
            handleStyle={{
              backgroundColor: '#1C1B28',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderColor: '#D9D9D9',
              borderBottomWidth: 0,
            }}
            handleIndicatorStyle={{ backgroundColor: '#555555', width: 60 }}
          >
            <S.BottomSheetContent>
              <S.BottomSheetHeader>
                <S.BottomSheetTitle>성별을 알려주세요</S.BottomSheetTitle>
                <S.CloseButton onPress={closeGenderBottomSheet}>
                  <S.CloseButtonText>✕</S.CloseButtonText>
                </S.CloseButton>
              </S.BottomSheetHeader>

              {GENDER_OPTIONS.map((item, idx) => (
                <S.OptionButton key={idx} onPress={() => handleGenderClosePress(item)}>
                  <S.OptionText isSelected={gender === item}>{item}</S.OptionText>
                  {gender === item && <S.CheckText>✓</S.CheckText>}
                </S.OptionButton>
              ))}
            </S.BottomSheetContent>
          </BottomSheet>
        </S.SignUpScreenContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
