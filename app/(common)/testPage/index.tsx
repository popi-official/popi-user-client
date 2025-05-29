import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';

// PG사 옵션들
const PGS = [
  { label: 'KG이니시스', value: 'html5_inicis' },
  { label: '나이스페이먼츠', value: 'nice' },
  { label: 'KCP', value: 'kcp' },
  { label: '토스페이먼츠', value: 'tosspay' },
  { label: '카카오페이', value: 'kakaopay' },
];

const METHODS = [
  { label: '신용카드', value: 'card' },
  { label: '실시간계좌이체', value: 'trans' },
  { label: '가상계좌', value: 'vbank' },
  { label: '휴대폰', value: 'phone' },
];

export default function PaymentScreen() {
  const router = useRouter();

  const [pg, setPg] = useState('html5_inicis');
  const [method, setMethod] = useState('card');
  const [merchantUid, setMerchantUid] = useState(`popi_${new Date().getTime()}`);
  const [name, setName] = useState('POPI 팝업스토어 예약');
  const [amount, setAmount] = useState('39000');
  const [buyerName, setBuyerName] = useState('테스트유저');
  const [buyerTel, setBuyerTel] = useState('01012345678');
  const [buyerEmail, setBuyerEmail] = useState('test@test.com');
  const [escrow, setEscrow] = useState(false);
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
    buyer_addr: '서울시 강남구',
    buyer_postcode: '06018',
    app_scheme: 'popiuserclient',
    escrow,
    // 기타 필요한 옵션들
    currency: undefined,
    notice_url: undefined,
    display: undefined,
    tax_free: undefined,
    custom_data: undefined,
    vbank_due: undefined,
    popup: undefined,
    digital: undefined,
    language: undefined,
    biz_num: undefined,
    customer_uid: undefined,
    naverPopupMode: undefined,
    naverUseCfm: undefined,
    naverProducts: undefined,
  };

  // 결제 콜백
  const handlePaymentCallback = (response: any) => {
    console.log('결제 결과:', response);

    router.replace({
      pathname: '/payment/paymentResult',
      params: {
        imp_success: response.imp_success?.toString(),
        success: response.success?.toString(),
        imp_uid: response.imp_uid,
        merchant_uid: response.merchant_uid,
        error_code: response.error_code,
        error_msg: response.error_msg,
        message: response.message,
      },
    });
  };

  // 결제 시작
  const handleStartPayment = () => {
    if (!buyerName || !buyerTel || !amount) {
      Alert.alert('오류', '필수 정보를 입력해주세요.');
      return;
    }
    setShowPayment(true);
  };

  // 결제 화면이 활성화된 경우
  if (showPayment) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <IMP.Payment
          userCode={'imp14735503'}
          loading={
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>결제 페이지 로딩 중...</Text>
            </View>
          }
          data={paymentData}
          callback={handlePaymentCallback}
        />

        {/* 취소 버튼 */}
        <TouchableOpacity style={styles.cancelButton} onPress={() => setShowPayment(false)}>
          <Text style={styles.cancelButtonText}>취소</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // 결제 정보 입력 화면
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>결제 정보</Text>

          {/* PG사 선택 */}
          <View style={styles.section}>
            <Text style={styles.label}>PG사</Text>
            <View style={styles.pickerContainer}>
              {PGS.map(item => (
                <TouchableOpacity
                  key={item.value}
                  style={[styles.pickerItem, pg === item.value && styles.pickerItemSelected]}
                  onPress={() => setPg(item.value)}
                >
                  <Text style={[styles.pickerText, pg === item.value && styles.pickerTextSelected]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* 결제 수단 선택 */}
          <View style={styles.section}>
            <Text style={styles.label}>결제수단</Text>
            <View style={styles.pickerContainer}>
              {METHODS.map(item => (
                <TouchableOpacity
                  key={item.value}
                  style={[styles.pickerItem, method === item.value && styles.pickerItemSelected]}
                  onPress={() => setMethod(item.value)}
                >
                  <Text
                    style={[styles.pickerText, method === item.value && styles.pickerTextSelected]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* 상품명 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>상품명</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="상품명을 입력하세요"
              placeholderTextColor="#999"
            />
          </View>

          {/* 결제금액 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>결제금액</Text>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              placeholder="결제금액을 입력하세요"
              placeholderTextColor="#999"
              keyboardType="number-pad"
            />
          </View>

          {/* 구매자 이름 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>구매자 이름</Text>
            <TextInput
              style={styles.input}
              value={buyerName}
              onChangeText={setBuyerName}
              placeholder="이름을 입력하세요"
              placeholderTextColor="#999"
            />
          </View>

          {/* 구매자 전화번호 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>전화번호</Text>
            <TextInput
              style={styles.input}
              value={buyerTel}
              onChangeText={setBuyerTel}
              placeholder="전화번호를 입력하세요"
              placeholderTextColor="#999"
              keyboardType="number-pad"
            />
          </View>

          {/* 구매자 이메일 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
              style={styles.input}
              value={buyerEmail}
              onChangeText={setBuyerEmail}
              placeholder="이메일을 입력하세요"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          {/* 에스크로 */}
          <View style={styles.switchGroup}>
            <Text style={styles.label}>에스크로</Text>
            <Switch
              value={escrow}
              onValueChange={setEscrow}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={escrow ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>

          {/* 결제 버튼 */}
          <TouchableOpacity style={styles.paymentButton} onPress={handleStartPayment}>
            <Text style={styles.paymentButtonText}>
              {parseInt(amount).toLocaleString()}원 결제하기
            </Text>
          </TouchableOpacity>

          {/* 취소 버튼 */}
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pickerItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#111',
  },
  pickerItemSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  pickerText: {
    color: '#ccc',
    fontSize: 14,
  },
  pickerTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'white',
    backgroundColor: '#111',
  },
  switchGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  paymentButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 16,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#999',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
  cancelButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 8,
    zIndex: 1000,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
