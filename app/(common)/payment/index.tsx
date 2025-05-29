import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';

const PGS = [
  { label: '토스페이먼츠', value: 'tosspay' },
  { label: '카카오페이', value: 'kakaopay' },
  // { label: 'KG이니시스', value: 'html5_inicis' },
  // { label: '나이스페이먼츠', value: 'nice' },
  // { label: 'KCP', value: 'kcp' },
];

const METHODS = [
  { label: '신용카드', value: 'card' },
  // { label: '실시간계좌이체', value: 'trans' },
  // { label: '가상계좌', value: 'vbank' },
  // { label: '휴대폰', value: 'phone' },
];

type PGLabel = (typeof PGS)[number]['label'];

export default function PaymentScreen() {
  const router = useRouter();

  const [pg, setPg] = useState<PGLabel>('');
  const [method, setMethod] = useState('card');
  const [merchantUid, setMerchantUid] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [buyerName, setBuyerName] = useState<string>('');
  const [buyerTel, setBuyerTel] = useState<string>('');
  const [buyerEmail, setBuyerEmail] = useState<string>('');
  const [showPayment, setShowPayment] = useState(false);
  // const [escrow, setEscrow] = useState(false);

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
      pathname: '/(common)/payment/PaymentResult',
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
    setShowPayment(true);
  };

  if (showPayment) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <IMP.Payment
          userCode={'imp14735503'}
          loading={
            <View>
              <Text>결제 페이지 로딩 중...</Text>
            </View>
          }
          data={paymentData}
          callback={handlePaymentCallback}
        />
        <TouchableOpacity onPress={() => setShowPayment(false)}>
          <Text>취소</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text>PG사</Text>
            <View>
              {PGS.map(item => (
                <TouchableOpacity key={item.value} onPress={() => setPg(item.value)}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <View>
              {METHODS.map(item => (
                <TouchableOpacity key={item.value} onPress={() => setMethod(item.value)}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text>상품명</Text>
            <Text>{name}</Text>
          </View>
          <View>
            <Text>결제금액</Text>
            <TextInput
              value={amount || '0'}
              keyboardType="number-pad"
              onChangeText={string => setAmount(string)}
            />
          </View>
          <View>
            <Text>구매자 이름</Text>
            <TextInput
              value={buyerName}
              onChangeText={setBuyerName}
              placeholder="이름을 입력하세요"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text>전화번호</Text>
            <TextInput
              value={buyerTel}
              onChangeText={setBuyerTel}
              placeholder="전화번호를 입력하세요"
              placeholderTextColor="#999"
              keyboardType="number-pad"
            />
          </View>
          <View>
            <Text>이메일</Text>
            <TextInput
              value={buyerEmail}
              onChangeText={setBuyerEmail}
              placeholder="이메일을 입력하세요"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity onPress={handleStartPayment}>
            <Text>{parseInt(amount).toLocaleString()}원 결제하기</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
