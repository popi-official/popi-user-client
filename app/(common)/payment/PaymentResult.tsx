import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentResult() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const impUid = params.imp_uid;
  const impSuccess = params.imp_success;
  const success = params.success;
  const merchantUid = params.merchantUid;
  const errorCode = params.errorCode;
  const errorMsg = params.errorMsg;
  const message = params.message;

  return (
    <SafeAreaView>
      <Text>결제 완료 페이지</Text>
      <Text>impUid : {impUid}</Text>
      <Text>impSuccess : {impSuccess}</Text>
      <Text>success : {success}</Text>
      <Text>merchantUid : {merchantUid}</Text>
      <Text>errorCode : {errorCode}</Text>
      <Text>errorMsg : {errorMsg}</Text>
      <Text>message : {message}</Text>
    </SafeAreaView>
  );
}
