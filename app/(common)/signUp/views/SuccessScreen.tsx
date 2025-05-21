import { useLocalSearchParams } from 'expo-router';
import { S } from './SuccessScreen.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = {
  background: require('@/assets/images/signUp/success-background.webp'),
  content: require('@/assets/images/signUp/success-content.webp'),
};

export default function SuccessScreen() {
  const params = useLocalSearchParams();
  const nickName = params.nickName as string;

  return (
    <S.SuccessScreenContainer>
      <S.BackgroundImageContainer>
        <S.BackgroundImage source={images.background} resizeMode="cover" />
      </S.BackgroundImageContainer>

      <SafeAreaView style={{ flex: 1 }}>
        <S.ContentContainer>
          <S.Title>회원가입이 완료되었어요</S.Title>
          <S.Nickname>{nickName}님</S.Nickname>
          <S.Welcome>환영합니다!</S.Welcome>
          <S.ContentImage source={images.content} />
        </S.ContentContainer>
      </SafeAreaView>
    </S.SuccessScreenContainer>
  );
}
