import { Image } from 'react-native';
import { S } from './PopUpEntry.style';

const Images = {
  cameraBoy: require('@/assets/images/popUpEntry/camera-boy.webp'),
  store: require('@/assets/images/popUpEntry/store.webp'),
  locationDarkGray: require('@/assets/images/popUpEntry/location-dark-gray.webp'),
  clockDarkGray: require('@/assets/images/popUpEntry/clock-dark-gray.webp'),
  qrCode: require('@/assets/images/popUpEntry/qr-code.webp'),
};

const PopUpDetailScreen = () => {
  return (
    <S.PopUpEntryScreenContainer>
      <S.Card>
        {/* TopCard */}
        <S.TopCard>
          <S.Title>입장 QR</S.Title>
          <S.CameraBoy source={Images.cameraBoy} style={{ width: 76, height: 76 }} />
          <S.PopUpTitleContainer>
            <Image source={Images.store} style={{ width: 18, height: 18, marginTop: 4 }} />
            <S.PopupTitle>블랙핑크 IN YOUR AREA</S.PopupTitle>
          </S.PopUpTitleContainer>
          <S.InfoTextContainer>
            <Image source={Images.locationDarkGray} style={{ width: 15, height: 15 }} />
            <S.InfoText>서울 영등포구 여의대로 108 더현대서울</S.InfoText>
          </S.InfoTextContainer>
          <S.InfoTextContainer>
            <Image source={Images.clockDarkGray} style={{ width: 15, height: 15 }} />
            <S.InfoText>2025.05.15 THU 15:30</S.InfoText>
          </S.InfoTextContainer>
        </S.TopCard>

        {/* QrCard */}
        <S.QrCard>
          <S.Description>이용하려는 팝업에 QR로 체크인하세요</S.Description>

          <S.QRWrapper>
            <Image source={Images.qrCode} style={{ width: 200, height: 200 }} />
          </S.QRWrapper>

          <S.ButtonRow>
            <S.Button disabled>
              <S.ButtonText disabled>예약 취소</S.ButtonText>
            </S.Button>
            <S.Button>
              <S.ButtonText>확인</S.ButtonText>
            </S.Button>
          </S.ButtonRow>
        </S.QrCard>
      </S.Card>
    </S.PopUpEntryScreenContainer>
  );
};

export default PopUpDetailScreen;
