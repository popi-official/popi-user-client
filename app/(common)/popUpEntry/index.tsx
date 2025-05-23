import { Image } from 'react-native';
import { S } from './PopUpEntry.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { popularItemList, recommendedItemList, reservationDetail } from '@/mocks/PopUpEntryMocks';

const Images = {
  cameraBoy: require('@/assets/images/popUpEntry/camera-boy.webp'),
  store: require('@/assets/images/popUpEntry/store.webp'),
  locationDarkGray: require('@/assets/images/popUpEntry/location-dark-gray.webp'),
  clockDarkGray: require('@/assets/images/popUpEntry/clock-dark-gray.webp'),
  qrCode: require('@/assets/images/popUpEntry/qr-code.webp'),
  item: require('@/assets/images/popUpEntry/item.webp'),
};

const PopUpEntryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <S.PopUpEntryScreenContainer showsVerticalScrollIndicator={false}>
        <S.Card>
          {/* TopCard */}
          <S.TopCard>
            <S.Title>입장 QR</S.Title>
            <S.CameraBoy source={Images.cameraBoy} style={{ width: 76, height: 76 }} />
            <S.PopUpTitleContainer>
              <Image source={Images.store} style={{ width: 18, height: 18, marginTop: 2 }} />
              <S.PopupTitle>{reservationDetail.popupName}</S.PopupTitle>
            </S.PopUpTitleContainer>
            <S.InfoTextContainer>
              <Image source={Images.locationDarkGray} style={{ width: 15, height: 15 }} />
              <S.InfoText>{reservationDetail.address}</S.InfoText>
            </S.InfoTextContainer>
            <S.InfoTextContainer>
              <Image source={Images.clockDarkGray} style={{ width: 15, height: 15 }} />
              <S.InfoText>
                {reservationDetail.popupDate} {reservationDetail.popupDay}{' '}
                {reservationDetail.popupTime}
              </S.InfoText>
            </S.InfoTextContainer>
          </S.TopCard>

          {/* QrCard */}
          <S.QrCard>
            <S.Description>이용하려는 팝업에 QR로 체크인하세요</S.Description>
            <S.QRImage
              source={{ uri: `data:image/png;base64,${reservationDetail.qrCodeBase64}` }}
              resizeMode="contain"
            />
            <S.ButtonRow>
              <S.Button isCancel>
                <S.ButtonText isCancel>예약 취소</S.ButtonText>
              </S.Button>
              <S.Button>
                <S.ButtonText>확인</S.ButtonText>
              </S.Button>
            </S.ButtonRow>
          </S.QrCard>
        </S.Card>

        {/* 취향저격 */}
        <S.SectionTitle>몽몽님의 취향 저격</S.SectionTitle>
        <S.SectionDescription>
          예약하실 때 작성하셨던 설문지 내용을 기반으로 추천드려요
        </S.SectionDescription>
        <S.GoodsContainer>
          {recommendedItemList.map(item => (
            <S.GoodsItem key={item.itemId}>
              <S.GoodsImage source={item.imagePath} />
              <S.GoodsName numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </S.GoodsName>
              <S.GoodsPrice numberOfLines={1} ellipsizeMode="tail">
                {item.price.toLocaleString()}원
              </S.GoodsPrice>
            </S.GoodsItem>
          ))}
        </S.GoodsContainer>

        {/* 인기 상품 TOP 3 */}
        <S.SectionTitle>인기 상품 TOP 3</S.SectionTitle>
        <S.SectionDescription>매장 방문 전에 인기있는 상품을 확인해보세요</S.SectionDescription>
        <S.GoodsContainer>
          {popularItemList.map(item => (
            <S.GoodsItem key={item.itemId}>
              <S.GoodsImage source={Images.item} />
              <S.GoodsName numbernumberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </S.GoodsName>
              <S.GoodsPrice numberOfLines={1} ellipsizeMode="tail">
                {item.price.toLocaleString()}원
              </S.GoodsPrice>
            </S.GoodsItem>
          ))}
        </S.GoodsContainer>
        <S.BottomArea />
      </S.PopUpEntryScreenContainer>
    </SafeAreaView>
  );
};

export default PopUpEntryScreen;
