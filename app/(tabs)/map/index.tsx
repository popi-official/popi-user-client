import { Text } from 'react-native';
import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { S } from './MapScreen.style';

export default function MapScreen() {
  return (
    <S.MapScreenContainer showsVerticalScrollIndicator={false}>
      <Text>지도 화면</Text>
      <NaverMapView style={{ flex: 1 }} />
    </S.MapScreenContainer>
  );
}
