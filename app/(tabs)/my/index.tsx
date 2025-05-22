import { useGetProfileApi } from '@/hooks/api/useProfileApi';
import { useOAuth } from '@/hooks/useOAuth';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';
import { Text, View } from 'react-native';

export default function MyScreen() {
  const { handleLogout, handleDeleteProfile } = useOAuth();
  const { isLogin } = useAuthStore();
  const { data } = useGetProfileApi();
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Text>마이페이지 화면 {isLogin ? '로그인' : '로그아웃된 상태'}</Text>
      <Text>{data?.nickname}</Text>
      <Button title="로그인 페이지 이동" onPress={() => router.push('/(common)/login')} />
      <Button title="로그아웃" onPress={handleLogout} />
      <Button title="회원탈퇴" onPress={handleDeleteProfile} />
    </View>
  );
}
