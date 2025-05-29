import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import IMP from 'iamport-react-native';
import { S } from './Payment.style';

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
  const params = useLocalSearchParams();

  console.log(params);

  const [pg, setPg] = useState<string>('tosspay');
  const [method, setMethod] = useState('card');
  const [merchantUid, setMerchantUid] = useState<string>(`popi_${Date.now()}`);
  const [name, setName] = useState<string>('상품 외 3건');
  const amount = 1000;
  const [buyerName, setBuyerName] = useState<string>('');
  const [buyerTel, setBuyerTel] = useState<string>('');
  const [buyerEmail, setBuyerEmail] = useState<string>('');
  const [showPayment, setShowPayment] = useState(false);

  const paymentData = {
    pg,
    pay_method: method,
    merchant_uid: merchantUid,
    name,
    amount,
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
      <SafeAreaView style={{ flex: 1 }}>
        <S.PaymentContainer>
          <S.PaymentHeader>
            <S.CancelButton onPress={() => setShowPayment(false)}>
              <Ionicons name="close" size={24} color="white" />
            </S.CancelButton>
            <S.PaymentHeaderTitle>결제 진행 중</S.PaymentHeaderTitle>
          </S.PaymentHeader>

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
        </S.PaymentContainer>
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
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
              <S.AmountText>{parseInt(amount || '0').toLocaleString()}원</S.AmountText>
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
              <S.InputLabel>이름 *</S.InputLabel>
              <S.Input
                value={buyerName}
                onChangeText={setBuyerName}
                placeholder="이름을 입력하세요"
                placeholderTextColor="#666"
              />
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
            <S.TotalAmount>{parseInt(amount || '0').toLocaleString()}원</S.TotalAmount>
          </S.TotalAmountContainer>

          <S.PaymentButton
            onPress={handleStartPayment}
            disabled={!buyerName || !buyerTel || !buyerEmail}
            isDisabled={!buyerName || !buyerTel || !buyerEmail}
          >
            <S.PaymentButtonText>
              {parseInt(amount || '0').toLocaleString()}원 결제하기
            </S.PaymentButtonText>
          </S.PaymentButton>
        </S.BottomContainer>
      </S.Container>
    </View>
  );
}
