// import { Image } from 'react-native';
import { S } from './PopUpEntry.style';

// const Images = {
//   cameraBoy: require('@/assets/images/popUpEntry/camera-boy.webp'),
//   store: require('@/assets/images/popUpEntry/store.webp'),
//   locationDarkGray: require('@/assets/images/popUpEntry/location-dark-gray.webp'),
//   clockDarkGray: require('@/assets/images/popUpEntry/clock-dark-gray.webp'),
//   qrCode: require('@/assets/images/popUpEntry/qr-code.webp'),
// };

const PopUpDetailScreen = () => {
  // const screenWidth = Dimensions.get('window').width;
  return (
    <S.PopUpEntryScreenContainer>
      <S.Card>
        <S.TopCard>
          <S.Title>입장 QR</S.Title>

          <S.InfoSection>
            <S.PopupTitle>블랙핑크 IN YOUR AREA</S.PopupTitle>
            <S.Address>서울 영등포구 여의대로 108 더현대서울</S.Address>
            <S.Time>2025.05.15 THU 15:30</S.Time>
          </S.InfoSection>
        </S.TopCard>
        {/* <S.QrCard>
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
        </S.QrCard> */}
      </S.Card>
    </S.PopUpEntryScreenContainer>
  );
};

export default PopUpDetailScreen;
