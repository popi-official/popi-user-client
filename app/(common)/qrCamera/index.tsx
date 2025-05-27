import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { S } from './QrCamera.style';
import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { useState } from 'react';
import { QRCameraItemData } from '@/types/QrCameraItemType';

const Images = {
  qrTopLeft: require('@/assets/images/qrCamera/qr-top-left.webp'),
  qrTopRight: require('@/assets/images/qrCamera/qr-top-right.webp'),
  qrBottomLeft: require('@/assets/images/qrCamera/qr-bottom-left.webp'),
  qrBottomRight: require('@/assets/images/qrCamera/qr-bottom-right.webp'),
  rightArrow: require('@/assets/images/common/right-arrow.webp'),
};

export default function QRCameraScreen() {
  const inset = useSafeAreaInsets();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);

    try {
      const parsedData: QRCameraItemData = JSON.parse(data);
      router.replace({
        pathname: '/(tabs)/cart',
        params: {
          itemId: parsedData.itemId.toString(),
          title: parsedData.title,
          imagePath: parsedData.imagePath,
          price: parsedData.price.toString(),
        },
      });
    } catch (e) {
      console.error('QR 데이터 파싱 실패:', e);
    }
  };

  if (!permission) return <Text>카메라 권한 확인 중...</Text>;

  if (!permission.granted) {
    return (
      <S.QrCameraScreenContainer>
        <Text>카메라 권한이 필요합니다</Text>
        <Text onPress={requestPermission}>권한 요청</Text>
      </S.QrCameraScreenContainer>
    );
  }
  return (
    <S.QrCameraScreenContainer>
      <S.CameraWrapper
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
      >
        {/* 오버레이 */}
        <S.OverlayWrapper>
          <S.TopOverlay />
          <S.LeftOverlay>
            <S.QrFrameLeftTop>
              <S.QrFrameImage source={Images.qrTopLeft} />
            </S.QrFrameLeftTop>
            <S.QrFrameLeftBottom>
              <S.QrFrameImage source={Images.qrBottomLeft} />
            </S.QrFrameLeftBottom>
          </S.LeftOverlay>
          <S.RightOverlay>
            <S.QrFrameRightTop>
              <S.QrFrameImage source={Images.qrTopRight} />
            </S.QrFrameRightTop>
            <S.QrFrameRightBottom>
              <S.QrFrameImage source={Images.qrBottomRight} />
            </S.QrFrameRightBottom>
          </S.RightOverlay>
          <S.BottomOverlay />
          <S.BackButtonWrapper onPress={() => router.back()} style={{ top: inset.top + 8 }}>
            <S.BackButton source={Images.rightArrow} />
          </S.BackButtonWrapper>
          <S.InstructionText>
            구매하실 상품의 QR을 찍어{'\n'}장바구니에 담아주세요
          </S.InstructionText>
          <S.QrBox />
        </S.OverlayWrapper>
      </S.CameraWrapper>
    </S.QrCameraScreenContainer>
  );
}
