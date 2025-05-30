import { useLocalSearchParams, useRouter } from 'expo-router';
import { S } from './SuccessScreen.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { View } from 'react-native';

const images = {
  content: require('@/assets/images/signUp/icon.webp'),
};

export default function SuccessScreen() {
  const params = useLocalSearchParams();
  const nickname = params.nickname as string;
  const router = useRouter();

  return (
    <S.SuccessScreenContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ContentContainer>
          <S.Title>회원가입이 완료되었어요</S.Title>
          <S.Nickname>{nickname}님</S.Nickname>
          <S.Welcome>환영합니다!</S.Welcome>
          <S.ContentImage source={images.content} />
          <View style={{ height: 54, width: '100%', position: 'absolute', bottom: 20 }}>
            <CustomGradientBtn title="시작하기" onPress={() => router.replace('/(tabs)/home')} />
          </View>
        </S.ContentContainer>
      </SafeAreaView>
    </S.SuccessScreenContainer>
  );
}
