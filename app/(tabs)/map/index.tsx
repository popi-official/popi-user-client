import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import { S } from './MapScreen.style';
import { popUpMarkerItems } from '@/mocks/MapMocks';
import { useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Image, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { formatDateRange } from '@/utils/FormatDate';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { popUpMarkerItem } from '@/types/MapScreenType';

const Images = {
  marker: require('@/assets/images/common/marker.webp'),
  closeIcon: require('@/assets/images/signUp/close.png'),
  calendarGray: require('@/assets/images/common/calendar-gray.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
};

// TODO: 현재 위치 받아오기
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
  const [visibleRegion, setVisibleRegion] = useState<Region | null>(null);

  const handleMarkerPress = (popupId: number) => {
    setSelectedPopupId(popupId);
    setIsMarkerTriggered(true);

    // 마커로 열릴 땐 1개이므로 37%
    setSnapPoints(['12%', '37%']);

    bottomSheetRef.current?.snapToIndex(1);
  };

  // 카메라 뷰 안에 있는 마커만 띄우기
  const visibleMarkers = useMemo(() => {
    if (!visibleRegion) return popUpMarkerItems;

    const MARGIN_RATIO = 0.1;
    const latDelta = visibleRegion.latitudeDelta * (1 + MARGIN_RATIO);
    const lngDelta = visibleRegion.longitudeDelta * (1 + MARGIN_RATIO);

    // 중심점 보정
    const centerLat = visibleRegion.latitude + visibleRegion.latitudeDelta / 2;
    const centerLng = visibleRegion.longitude + visibleRegion.longitudeDelta / 2;

    const latMin = centerLat - latDelta / 2;
    const latMax = centerLat + latDelta / 2;
    const lngMin = centerLng - lngDelta / 2;
    const lngMax = centerLng + lngDelta / 2;

    return popUpMarkerItems.filter(
      item =>
        item.latitude >= latMin &&
        item.latitude <= latMax &&
        item.longitude >= lngMin &&
        item.longitude <= lngMax,
    );
  }, [visibleRegion, popUpMarkerItems]);

  // TODO: 서버 연결할 때 보낼 params
  // const buildRegionBounds = (region: Region) => {
  //   // region.latitude / longitude는 남서쪽 꼭짓점이 기준
  //   const centerLat = region.latitude + region.latitudeDelta / 2;
  //   const centerLng = region.longitude + region.longitudeDelta / 2;

  //   const latMin = centerLat - region.latitudeDelta / 2;
  //   const latMax = centerLat + region.latitudeDelta / 2;
  //   const lngMin = centerLng - region.longitudeDelta / 2;
  //   const lngMax = centerLng + region.longitudeDelta / 2;

  //   return { latMin, latMax, lngMin, lngMax };
  // };

  useEffect(() => {
    if (visibleMarkers.length === 0) return;

    // 초기 상태: 전체 아이템 수 기준
    if (!isMarkerTriggered) {
      if (visibleMarkers.length === 1) {
        setSnapPoints(['12%', '37%']);
      } else {
        setSnapPoints(['12%', '50%']);
      }
    }
  }, [visibleMarkers.length, isMarkerTriggered]);

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
        mapPadding={{ bottom: 120 }}
        onCameraIdle={info => {
          setVisibleRegion(info.region); // 현재 카메라 영역
        }}
        onTapMap={() => {
          setSelectedPopupId(null);
          setIsMarkerTriggered(false);
          setIsBottomSheetOpen(false);

          // snapPoints도 다시 전체 목록 기준으로 되돌리기
          if (visibleMarkers.length === 1) {
            setSnapPoints(['12%', '37%']);
          } else {
            setSnapPoints(['12%', '50%']);
          }
          // 바텀시트 내리기
          bottomSheetRef.current?.snapToIndex(0);
        }}
      >
        {visibleMarkers.map(item => (
          <NaverMapMarkerOverlay
            key={item.popupId}
            latitude={item.latitude}
            longitude={item.longitude}
            anchor={{ x: 0.5, y: 1 }}
            width={selectedPopupId === item.popupId ? 55 : 32}
            height={selectedPopupId === item.popupId ? 81 : 47}
            image={Images.marker}
            onTap={() => handleMarkerPress(item.popupId)}
          />
        ))}
      </NaverMapView>

      {/* 바텀시트 */}
      {visibleMarkers.length > 0 && (
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

              // 다시 snapPoints 복구
              if (visibleMarkers.length === 1) {
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
              visibleMarkers.map((item, idx) => (
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
