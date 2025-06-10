import { Image, View } from 'react-native';
import { S } from './PopUpEntry.style';
import { useState } from 'react';
import NoticeModal from '@/components/noticeModal/NoticeModal';
import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import { useDeleteReservation } from '@/hooks/api/useReserviationApi';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTicketData } from '@/hooks/useTicket';
import { useGetHotItemsApi } from '@/hooks/api/usePopUpDetailApi';
import NoPopularItem from '@/components/popUpDetail/NoPopularItem';

const Images = {
  cameraBoy: require('@/assets/images/popUpEntry/camera-boy.webp'),
  store: require('@/assets/images/popUpEntry/store.webp'),
  locationDarkGray: require('@/assets/images/popUpEntry/location-dark-gray.webp'),
  clockDarkGray: require('@/assets/images/popUpEntry/clock-dark-gray.webp'),
  qrCode: require('@/assets/images/popUpEntry/qr-code.webp'),
  item: require('@/assets/images/popUpEntry/item.webp'),
  marker: require('@/assets/images/common/marker.webp'),
  icon: require('@/assets/images/my/my-character.webp'),
  check: require('@/assets/images/common/check.webp'),
};

const PopUpEntryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { mutate: deleteReservation } = useDeleteReservation();
  const { source, data } = useLocalSearchParams<{
    source?: 'home' | 'my';
    data?: string;
  }>();
  const router = useRouter();

  const ticket = useTicketData(source, data);
  const { hotItems } = useGetHotItemsApi({
    popupId: ticket?.popupId || 0,
    enabled: !!ticket?.popupId,
  });

  const handleCancelPress = () => {
    setModalVisible(true);
  };

  const handleConfirmCancel = () => {
    if (ticket) {
      deleteReservation(
        {
          memberReservationId: ticket.reservationId,
        },
        {
          onSuccess: () => {
            setModalVisible(false);
            router.replace('/(tabs)/my');
          },
        },
      );
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (!ticket) {
    return (
      <S.Container>
        <S.EmptyWrapper>
          <S.Content source={Images.icon} />
          <S.EmptyText>아직 예약된 티켓이 없어요</S.EmptyText>
        </S.EmptyWrapper>
      </S.Container>
    );
  }

  const region: Region = {
    latitude: ticket.latitude - 0.01 / 2,
    longitude: ticket.longitude - 0.01 / 2,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <>
      <S.Container>
        <S.PopUpEntryScreenContainer showsVerticalScrollIndicator={false}>
          <S.Card>
            {/* TopCard */}
            <S.TopCard>
              <S.Title>입장 QR</S.Title>
              <S.CameraBoy source={Images.cameraBoy} style={{ width: 76, height: 76 }} />
              <S.PopUpTitleContainer>
                <Image source={Images.store} style={{ width: 18, height: 18, marginTop: 2 }} />
                <S.PopupTitle>{ticket.popupName}</S.PopupTitle>
              </S.PopUpTitleContainer>
              <S.InfoTextContainer>
                <Image source={Images.locationDarkGray} style={{ width: 15, height: 15 }} />
                <S.InfoText>{ticket.address}</S.InfoText>
              </S.InfoTextContainer>
              <S.InfoTextContainer>
                <Image source={Images.clockDarkGray} style={{ width: 15, height: 15 }} />
                <S.InfoText>
                  {ticket.reservationDate} {ticket.reservationDay} {ticket.reservationTime}
                </S.InfoText>
              </S.InfoTextContainer>
            </S.TopCard>

            {/* QrCard */}
            <S.QrCard>
              <S.Description>이용하려는 팝업에 QR로 체크인하세요</S.Description>
              <S.QRImage
                source={{ uri: `data:image/png;base64,${ticket.qrImage}` }}
                resizeMode="contain"
              />
              <S.ButtonRow>
                <S.Button isCancel onPress={handleCancelPress}>
                  <S.ButtonText isCancel>예약 취소</S.ButtonText>
                </S.Button>
              </S.ButtonRow>
            </S.QrCard>
          </S.Card>

          {/* 지도 */}
          <View>
            <S.MapTitle>위치 정보</S.MapTitle>
            <S.MapContainer>
              <NaverMapView
                layerGroups={{
                  BUILDING: true,
                  BICYCLE: false,
                  CADASTRAL: false,
                  MOUNTAIN: false,
                  TRAFFIC: false,
                  TRANSIT: false,
                }}
                style={{ flex: 1 }}
                initialRegion={region}
                isExtentBoundedInKorea={true}
              >
                <NaverMapMarkerOverlay
                  latitude={ticket.latitude}
                  longitude={ticket.longitude}
                  anchor={{ x: 0.5, y: 1 }}
                  width={32}
                  height={47}
                  image={Images.marker}
                />
              </NaverMapView>
            </S.MapContainer>
          </View>

          <S.Divider />

          {/* 인기 상품 TOP 3 */}
          <S.SectionTitle>인기 상품 TOP 3</S.SectionTitle>
          <S.SectionDescription>매장 방문 전에 인기있는 상품을 확인해보세요</S.SectionDescription>
          <S.GoodsContainer>
            {hotItems ? (
              hotItems.map(item => (
                <S.GoodsItem key={item.itemId}>
                  <S.GoodsImage source={Images.item} />
                  <S.GoodsName numbernumberOfLines={1} ellipsizeMode="tail">
                    {item.title}
                  </S.GoodsName>
                  <S.GoodsPrice numberOfLines={1} ellipsizeMode="tail">
                    {item.price.toLocaleString()}원
                  </S.GoodsPrice>
                </S.GoodsItem>
              ))
            ) : (
              <NoPopularItem />
            )}
          </S.GoodsContainer>
          <S.BottomArea />
        </S.PopUpEntryScreenContainer>
      </S.Container>

      {/* 예약 취소 확인 모달 */}
      <NoticeModal
        icon={Images.check}
        visible={modalVisible}
        title="예약을 취소하시겠습니까?"
        onClose={handleCloseModal}
        buttons={[
          { title: '돌아가기', onPress: handleCloseModal },
          { title: '예약 취소', onPress: handleConfirmCancel },
        ]}
      />
    </>
  );
};

export default PopUpEntryScreen;
