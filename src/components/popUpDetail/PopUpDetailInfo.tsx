import { TouchableOpacity, View } from 'react-native';
import { S } from '../../../app/(common)/popUpDetail/PopUpDetail.style';
import { PopUpDetailMock } from '@/mocks/PopUpDetailMocks';
import { HotItemMocks, ItemMocks } from '@/mocks/PopUpDetailItemMocks';
import HotItems from '../entireItems/hotItems/HotItems';
import { useCallback } from 'react';
import { ItemPathType } from '@/types/DetailScreen';
import { useRouter } from 'expo-router';
import { ParseJsonToString } from '@/utils/JsonParser';

export default function PopUpDetailInfo() {
  const popupDetailInfo = PopUpDetailMock;
  const hotItems = HotItemMocks;
  const router = useRouter();

  const renderHotItem = useCallback(
    (item: any, index: number) => <HotItems key={index} item={item} index={index} />,
    [],
  );

  const renderItem = useCallback(
    (item: ItemPathType, idx: number) => (
      <S.ItemCard key={idx}>
        <S.ItemImage source={{ uri: item.imagePath }} />
        <S.ItemTitle numberOfLines={1}>{item.title}</S.ItemTitle>
        <S.ItemPrice>{item.price}</S.ItemPrice>
      </S.ItemCard>
    ),
    [],
  );

  const navigateToEntireItems = useCallback(() => {
    router.push({
      pathname: '/(common)/popUpDetail/entireItems',
      params: {
        hotItems: ParseJsonToString(hotItems),
        title: popupDetailInfo.popupName,
      },
    });
  }, [router, popupDetailInfo.popupName]);

  return (
    <View>
      <S.Banner source={require('@/assets/images/common/popupimg.png')} />
      <S.PopUpContentBox>
        <S.PopupTitle>{popupDetailInfo.popupName}</S.PopupTitle>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/location-gray.webp')} />
          <S.PopupInfo>{`${popupDetailInfo.popupOpenDate} - ${popupDetailInfo.popupCloseDate}`}</S.PopupInfo>
        </S.SubInfoRow>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/calendar-gray.webp')} />
          <S.PopupInfo>{popupDetailInfo.address}</S.PopupInfo>
        </S.SubInfoRow>
      </S.PopUpContentBox>

      <S.Divider />

      <S.PopUpContentBox>
        <S.SectionTitle style={{ marginBottom: 8 }}>운영시간</S.SectionTitle>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/clock-gray.webp')} />
          <S.PopupInfo>{`${popupDetailInfo.runOpenTime.slice(0, 5)} - ${popupDetailInfo.runCloseTime.slice(0, 5)}`}</S.PopupInfo>
        </S.SubInfoRow>

        <S.SectionTitle style={{ marginTop: 20, marginBottom: 12 }}>위치정보</S.SectionTitle>
        <S.MapImage source={{ uri: popupDetailInfo.imageUrl }} />
      </S.PopUpContentBox>

      <S.DividerWide />

      <S.ItemContentBox>
        <S.ItemCategory style={{ marginTop: 40, marginBottom: 20 }}>WHAT`S HOT</S.ItemCategory>
        <S.ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotItems.map(renderHotItem)}
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
          {ItemMocks.slice(0, 4).map(renderItem)}
        </S.ScrollView>
      </S.ItemContentBox>
    </View>
  );
}
