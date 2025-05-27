import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { S } from './QrCamera.style';
// import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';

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
  // const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  // const [scanned, setScanned] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // const handleBarCodeScanned = ({ data }: any) => {
  //   setScanned(true);
  //   console.log('QR 인식됨:', data);
  //   router.replace('/(tab)/cart')
  // };

  // if (hasPermission === null) return <Text>카메라 권한 확인 중...</Text>;
  // if (hasPermission === false) return <Text>카메라 권한이 없습니다</Text>;

  return (
    <S.QrCameraScreenContainer>
      <S.CameraWrapper>
        {/* 추후 이걸로 변경
        <S.CameraWrapper
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{ barCodeTypes: ['qr'] }}
      > */}
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
