import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import { S } from './MapScreen.style';
import { popUpMarkerItems } from '@/mocks/MapMocks';
import { useMemo, useRef } from 'react';
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
              <Image source={Images.calendarGray} style={{ width: 15, height: 15, marginTop: 2 }} />
              <S.SubText>{formatDateRange(item.popupOpenDate, item.popupCloseDate)}</S.SubText>
            </S.SubTextContainer>
            <S.SubTextContainer>
              <Image source={Images.calendarGray} style={{ width: 15, height: 15, marginTop: 2 }} />
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
  const snapPoints = useMemo(() => ['50%'], []);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   bottomSheetRef.current?.snapToIndex(0);
  //   setIsOpen(true);
  // };

  // const handleClose = () => {
  //   bottomSheetRef.current?.close();
  //   setIsOpen(false);
  // };
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
        {popUpMarkerItems.map((item, idx) => (
          <NaverMapMarkerOverlay
            key={idx}
            latitude={item.latitude}
            longitude={item.longitude}
            anchor={{ x: 0.5, y: 1 }}
            width={32}
            height={47}
            image={Images.marker}
          />
        ))}
      </NaverMapView>

      {/* 바텀시트 */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        enablePanDownToClose={true}
        index={0}
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
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
        >
          <S.BottomSheetTitle>근처 팝업</S.BottomSheetTitle>
          <S.Divider />
          {popUpMarkerItems.map((item, idx) => (
            <MarkerListCard
              key={idx}
              item={item}
              onPress={() => {
                router.push('/(common)/popUpDetail');
              }}
            />
          ))}
        </ScrollView>
      </BottomSheet>
    </S.MapScreenContainer>
  );
};

export default MapScreen;
