import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { S } from './QrCamera.style';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { Alert, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { QRCameraItemData } from '@/types/QrCameraItemType';
import { StyleSheet } from 'react-native';

const Images = {
  qrTopLeft: require('@/assets/images/qrCamera/qr-top-left.webp'),
  qrTopRight: require('@/assets/images/qrCamera/qr-top-right.webp'),
  qrBottomLeft: require('@/assets/images/qrCamera/qr-bottom-left.webp'),
  qrBottomRight: require('@/assets/images/qrCamera/qr-bottom-right.webp'),
  rightArrow: require('@/assets/images/common/right-arrow.webp'),
};

const styles = StyleSheet.create({
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default function QRCameraScreen() {
  const inset = useSafeAreaInsets();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const addToCart = useCartStore.getState().addToCart;
  const setCartPopUpId = useCartStore.getState().setCartPopUpId;

  // QR code 스캔 이후 데이터 장바구니에 추가
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);

    try {
      const parsed: QRCameraItemData = JSON.parse(data);

      addToCart({
        itemId: Number(parsed.itemId),
        title: parsed.title,
        imagePath: parsed.imagePath,
        price: Number(parsed.price),
      });

      setCartPopUpId(parsed.popupId);

      router.replace('/(tabs)/cart');
    } catch (e) {
      console.error('QR 파싱 오류', e);
    }
  };

  const handlePermission = async () => {
    if (!permission || !permission.granted) {
      const response = await requestPermission();
      if (response.status === 'denied') {
        Alert.alert('권한 필요', 'QR 인식을 위해서는 카메라 권한이 필요합니다.', [
          {
            text: '취소',
            style: 'cancel',
          },
          {
            text: '설정으로 이동',
            onPress: () => Linking.openSettings(),
          },
        ]);
      }
    }
  };

  useEffect(() => {
    handlePermission();
  }, []);

  return (
    <S.QrCameraScreenContainer>
      <CameraView
        style={styles.camera}
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
      </CameraView>
    </S.QrCameraScreenContainer>
  );
}
