import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { S } from './PaymentResult.style';
import { View } from 'react-native';

const Images = {
  successIcon: require('@/assets/images/payment/success-icon.webp'),
};

export default function PaymentResult() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: 'black' }}>
      <S.PaymentResultContainer>
        <S.ContentContainer>
          <S.SuccessImage source={Images.successIcon} resizeMode="contain" />
          <S.TitleText>결제 완료</S.TitleText>
          <S.SubtitleText>주문하신 상품 결제가 완료되었습니다</S.SubtitleText>
        </S.ContentContainer>

        <S.ButtonContainer>
          <CustomGradientBtn title="확인" onPress={() => router.replace('/(tabs)/home')} />
        </S.ButtonContainer>
      </S.PaymentResultContainer>
    </View>
  );
}
