import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IMP from 'iamport-react-native';
import { S } from './Payment.style';
import { ParseStringToJson } from '@/utils/JsonParser';
import { PostPaymentReadyResponse } from '@/types/api/ApiResponseType';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PGS = [
  {
    label: '토스페이먼츠',
    value: 'tosspay',
    icon: require('@/assets/images/payment/toss-icon.png'),
  },
  { label: '카카오페이', value: 'kakaopay' },
];

export default function PaymentScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { paymentReadyInfo } = useLocalSearchParams<{ paymentReadyInfo: string }>();
  const { name, merchantUid, amount, buyerName } = ParseStringToJson(
    paymentReadyInfo,
  ) as PostPaymentReadyResponse;

  const [pg, setPg] = useState<string>('tosspay');
  const [buyerTel, setBuyerTel] = useState<string>('');
  const [buyerEmail, setBuyerEmail] = useState<string>('');
  const [showPayment, setShowPayment] = useState(false);

  const paymentData = {
    pg,
    pay_method: 'card',
    merchant_uid: merchantUid,
    name: name,
    amount: amount,
    buyer_name: buyerName,
    buyer_tel: buyerTel,
    buyer_email: buyerEmail,
    app_scheme: 'popiuserclient',
    escrow: false,
  };

  const handlePaymentCallback = (response: any) => {
    router.replace({
      pathname: '/payment/paymentResult',
      params: {
        impSuccess: response.imp_success?.toString(),
        success: response.success?.toString(),
        impUid: response.imp_uid,
        merchantUid: response.merchant_uid,
        errorCode: response.error_code,
        errorMsg: response.error_msg,
        message: response.message,
      },
    });
  };

  const handleStartPayment = () => {
    if (!buyerName || !buyerTel || !buyerEmail) {
      Alert.alert('정보 입력', '필수 정보를 모두 입력해주세요.');
      return;
    }
    setShowPayment(true);
  };

  if (showPayment) {
    return (
      <View style={{ flex: 1 }}>
        <IMP.Payment
          userCode={'imp14735503'}
          loading={
            <S.LoadingContainer>
              <S.LoadingText>결제 페이지 로딩 중...</S.LoadingText>
            </S.LoadingContainer>
          }
          data={paymentData}
          callback={handlePaymentCallback}
        />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <S.Container>
          <S.Content>
            <S.PaymentInfoCard>
              <S.SectionTitle>결제 정보</S.SectionTitle>
              <S.InfoRow>
                <S.InfoLabel>상품명</S.InfoLabel>
                <S.InfoValue>{name}</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>결제금액</S.InfoLabel>
                <S.AmountText>{Number(amount).toLocaleString()}원</S.AmountText>
              </S.InfoRow>
            </S.PaymentInfoCard>

            <S.Section>
              <S.SectionTitle>결제수단 선택</S.SectionTitle>
              <S.PgContainer>
                {PGS.map(item => (
                  <S.PgButton
                    key={item.value}
                    onPress={() => setPg(item.value)}
                    isSelected={pg === item.value}
                  >
                    <S.PgButtonText isSelected={pg === item.value}>{item.label}</S.PgButtonText>
                    {pg === item.value && (
                      <Ionicons name="checkmark-circle" size={20} color="#C3E4F5" />
                    )}
                  </S.PgButton>
                ))}
              </S.PgContainer>
            </S.Section>

            <S.Section>
              <S.SectionTitle>구매자 정보</S.SectionTitle>

              <S.InputGroup>
                <S.InputLabel>이름</S.InputLabel>
                <S.CommonText>{buyerName}</S.CommonText>
              </S.InputGroup>

              <S.InputGroup>
                <S.InputLabel>전화번호 *</S.InputLabel>
                <S.Input
                  value={buyerTel}
                  onChangeText={setBuyerTel}
                  placeholder="010-0000-0000"
                  placeholderTextColor="#666"
                  keyboardType="number-pad"
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.InputLabel>이메일 *</S.InputLabel>
                <S.Input
                  value={buyerEmail}
                  onChangeText={setBuyerEmail}
                  placeholder="example@email.com"
                  placeholderTextColor="#666"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </S.InputGroup>
            </S.Section>
          </S.Content>

          <S.BottomContainer>
            <S.TotalAmountContainer>
              <S.TotalLabel>총 결제금액</S.TotalLabel>
              <S.TotalAmount>{Number(amount).toLocaleString()}원</S.TotalAmount>
            </S.TotalAmountContainer>

            <CustomGradientBtn
              title={`${Number(amount).toLocaleString()}원 결제하기`}
              onPress={handleStartPayment}
              disabled={!buyerName || !buyerTel || !buyerEmail}
            />
          </S.BottomContainer>
        </S.Container>
      </View>
    </TouchableWithoutFeedback>
  );
}
