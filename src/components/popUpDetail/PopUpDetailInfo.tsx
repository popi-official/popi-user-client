import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { S } from '../../../app/(common)/popUpDetail/PopUpDetail.style';
import HotItems from '../entireItems/hotItems/HotItems';
import { useCallback } from 'react';
import { ItemUrlType } from '@/types/DetailScreen';
import { useRouter } from 'expo-router';
import { ParseJsonToString } from '@/utils/JsonParser';
import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import {
  useGetDefaultItemsApi,
  useGetHotItemsApi,
  usePopUpDetailApi,
} from '@/hooks/api/usePopUpDetailApi';
import { usePopUpStore } from '@/store/usePopUpStore';

const Images = {
  marker: require('@/assets/images/common/marker.webp'),
  chart: require('@/assets/images/common/chart.webp'),
};

export default function PopUpDetailInfo() {
  const { selectedPopUpId } = usePopUpStore();
  const {
    popUpDetailInfo,
    isLoading: hotItemsIsLoading,
    isError,
  } = usePopUpDetailApi({ popupId: selectedPopUpId });
  const { hotItems } = useGetHotItemsApi({ popupId: selectedPopUpId });
  const { defaultItems } = useGetDefaultItemsApi({ popupId: selectedPopUpId });

  const router = useRouter();

  const renderHotItem = useCallback(
    (item: any, index: number) => <HotItems key={index} item={item} index={index} />,
    [],
  );

  const renderItem = useCallback(
    (item: ItemUrlType, idx: number) => (
      <S.ItemCard key={idx}>
        <S.ItemImage source={{ uri: item.imageUrl }} />
        <S.ItemTitle numberOfLines={1}>{item.name}</S.ItemTitle>
        <S.ItemPrice>{item.price}원</S.ItemPrice>
      </S.ItemCard>
    ),
    [],
  );

  const navigateToEntireItems = useCallback(() => {
    if (hotItems) {
      router.push({
        pathname: '/(common)/popUpDetail/entireItems',
        params: {
          hotItems: ParseJsonToString(hotItems),
          title: popUpDetailInfo && popUpDetailInfo.popupName,
        },
      });
    }
  }, [hotItems, router, popUpDetailInfo]);

  if (isError || !popUpDetailInfo) {
    return <Text>데이터를 불러오지 못했습니다.</Text>;
  }

  const region: Region = {
    latitude: popUpDetailInfo.latitude - 0.01 / 2,
    longitude: popUpDetailInfo.longitude - 0.01 / 2,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View>
      <S.Banner source={{ uri: popUpDetailInfo.imageUrl }} />
      <S.PopUpContentBox>
        <S.PopupTitle>{popUpDetailInfo.popupName}</S.PopupTitle>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/location-gray.webp')} />
          <S.PopupInfo>{`${popUpDetailInfo.popupOpenDate} - ${popUpDetailInfo.popupCloseDate}`}</S.PopupInfo>
        </S.SubInfoRow>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/calendar-gray.webp')} />
          <S.PopupInfo>{popUpDetailInfo.address}</S.PopupInfo>
        </S.SubInfoRow>
      </S.PopUpContentBox>

      <S.Divider />

      <S.PopUpContentBox>
        <S.SectionTitle style={{ marginBottom: 8 }}>운영시간</S.SectionTitle>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/clock-gray.webp')} />
          <S.PopupInfo>{`${popUpDetailInfo.runOpenTime.slice(0, 5)} - ${popUpDetailInfo.runCloseTime.slice(0, 5)}`}</S.PopupInfo>
        </S.SubInfoRow>

        <S.SectionTitle style={{ marginTop: 20, marginBottom: 12 }}>위치정보</S.SectionTitle>
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
              latitude={popUpDetailInfo.latitude}
              longitude={popUpDetailInfo.longitude}
              anchor={{ x: 0.5, y: 1 }}
              width={32}
              height={47}
              image={Images.marker}
            />
          </NaverMapView>
        </S.MapContainer>
      </S.PopUpContentBox>

      <S.DividerWide />

      <S.ItemContentBox>
        <S.ItemCategory style={{ marginTop: 40, marginBottom: 20 }}>WHAT`S HOT</S.ItemCategory>
        <S.ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotItemsIsLoading && <ActivityIndicator />}
          {hotItems && hotItems.length > 0 ? (
            hotItems.map(renderHotItem)
          ) : (
            <S.EmptyContainer>
              <Image
                source={Images.chart}
                resizeMode="cover"
                style={{ width: 20, aspectRatio: 1, tintColor: 'white' }}
              />
              <S.EmptyTitle>아직 인기상품 데이터가 없어요</S.EmptyTitle>
              <S.EmptyContent>지금은 모든 상품이 똑같이 특별해요!</S.EmptyContent>
            </S.EmptyContainer>
          )}
        </S.ScrollView>
      </S.ItemContentBox>

      <S.ItemContentBox>
        <S.RowBetween>
          <S.ItemCategoryAll>전체 상품</S.ItemCategoryAll>
          <TouchableOpacity onPress={navigateToEntireItems}>
            <S.RightArrow source={require('@/assets/images/common/right-arrow.webp')} />
          </TouchableOpacity>
        </S.RowBetween>
        <S.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 24 }}
          style={{ marginBottom: 12 }}
        >
          {defaultItems && defaultItems.slice(0, 4).map(renderItem)}
        </S.ScrollView>
      </S.ItemContentBox>
    </View>
  );
}
