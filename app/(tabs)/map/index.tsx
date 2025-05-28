import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import { S } from './MapScreen.style';
import { popUpMarkerItems } from '@/mocks/MapMocks';
import { useEffect, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Image, View } from 'react-native';
import { popUpMarkerItem } from '@/types/api/ApiResponseType';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { formatDateRange } from '@/utils/FormatDate';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';

const Images = {
  marker: require('@/assets/images/common/marker.webp'),
  closeIcon: require('@/assets/images/signUp/close.png'),
  calendarGray: require('@/assets/images/common/calendar-gray.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
};

const initialRegion: Region = {
  latitude: 37.544783 - 0.01 / 2,
  longitude: 127.055991 - 0.01 / 2,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

interface Props {
  item: popUpMarkerItem;
  onPress: () => void;
}

const MarkerListCard = ({ item, onPress }: Props) => {
  const router = useRouter();

  return (
    <View>
      <S.CardContainer onPress={onPress}>
        <S.StyledImage source={item.imageUrl} />
        <S.RightWrapper>
          <S.TextGroup>
            <S.Title>{item.popupName}</S.Title>
            <S.SubTextContainer>
              <Image
                source={Images.calendarGray}
                style={{ width: 14, height: 14, marginTop: 2, marginRight: 4 }}
              />
              <S.SubText>{formatDateRange(item.popupOpenDate, item.popupCloseDate)}</S.SubText>
            </S.SubTextContainer>
            <S.SubTextContainer>
              <Image
                source={Images.locationGray}
                style={{ width: 15, height: 15, marginTop: 2, marginRight: 2 }}
              />
              <S.SubText numberOfLines={2}>{item.address}</S.SubText>
            </S.SubTextContainer>
          </S.TextGroup>
          <CustomGradientBtn
            title={'상세보기'}
            onPress={() => router.push('/(common)/popUpDetail')}
            height={38}
            width={'100%'}
            fontSize={14}
            fontWeight="600"
          />
        </S.RightWrapper>
      </S.CardContainer>
      <S.DarkDivider />
    </View>
  );
};

const MapScreen = () => {
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [snapPoints, setSnapPoints] = useState<string[]>(['12%']);
  const [selectedPopupId, setSelectedPopupId] = useState<number | null>(null);
  const [isMarkerTriggered, setIsMarkerTriggered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const selectedItem = popUpMarkerItems.find(p => p.popupId === selectedPopupId);

  useEffect(() => {
    if (popUpMarkerItems.length === 0) return;

    // 초기 상태: 전체 아이템 수 기준
    if (!isMarkerTriggered) {
      if (popUpMarkerItems.length === 1) {
        setSnapPoints(['12%', '37%']);
      } else {
        setSnapPoints(['12%', '50%']);
      }
    }
  }, [popUpMarkerItems.length, isMarkerTriggered]);

  const handleMarkerPress = (popupId: number) => {
    setSelectedPopupId(popupId);
    setIsMarkerTriggered(true);

    // 마커로 열릴 땐 1개이므로 37% ['12%', '37%']
    setSnapPoints(['12%', '37%']);

    bottomSheetRef.current?.snapToIndex(1);
  };

  return (
    <S.MapScreenContainer showsVerticalScrollIndicator={false}>
      {/* 지도 */}
      <NaverMapView
        style={{ flex: 1 }}
        layerGroups={{
          BUILDING: true,
          BICYCLE: false,
          CADASTRAL: false,
          MOUNTAIN: false,
          TRAFFIC: false,
          TRANSIT: false,
        }}
        initialRegion={initialRegion}
        isExtentBoundedInKorea={true}
      >
        {popUpMarkerItems.map(item => (
          <NaverMapMarkerOverlay
            key={item.popupId}
            latitude={item.latitude}
            longitude={item.longitude}
            anchor={{ x: 0.5, y: 1 }}
            width={selectedPopupId === item.popupId ? 48 : 32}
            height={selectedPopupId === item.popupId ? 63 : 47}
            image={Images.marker}
            onTap={() => handleMarkerPress(item.popupId)}
          />
        ))}
      </NaverMapView>

      {/* 바텀시트 */}
      {popUpMarkerItems.length > 0 && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          enablePanDownToClose={false}
          index={0}
          detached={true}
          backgroundStyle={{
            backgroundColor: '#000000',
            borderBottomWidth: 0,
          }}
          handleStyle={{
            backgroundColor: '#000000',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          containerStyle={{
            width: '100%',
          }}
          handleIndicatorStyle={{ backgroundColor: '#BCBCBE', width: 60 }}
          onChange={index => {
            if (index === 0) {
              setIsBottomSheetOpen(false);
              setSelectedPopupId(null);
              setIsMarkerTriggered(false);

              // 다시 전체 목록 기준으로 snapPoints 복구
              if (popUpMarkerItems.length === 1) {
                setSnapPoints(['12%', '37%']);
              } else {
                setSnapPoints(['12%', '50%']);
              }
            } else {
              setIsBottomSheetOpen(true);
            }
          }}
        >
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 90, minHeight: 50 }}
            showsVerticalScrollIndicator={false}
          >
            <S.BottomSheetTitle>근처 팝업</S.BottomSheetTitle>
            <S.Divider />
            {isMarkerTriggered && selectedPopupId !== null && selectedItem ? (
              // 마커 눌렀을 때 하나만 보여줌
              <MarkerListCard
                item={selectedItem}
                onPress={() => router.push('/(common)/popUpDetail')}
              />
            ) : (
              // 평소엔 전체 목록
              popUpMarkerItems.map((item, idx) => (
                <MarkerListCard
                  key={idx}
                  item={item}
                  onPress={() => router.push('/(common)/popUpDetail')}
                />
              ))
            )}
          </ScrollView>
        </BottomSheet>
      )}
    </S.MapScreenContainer>
  );
};

export default MapScreen;
