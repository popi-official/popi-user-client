import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { S } from './PopUpDetail.style';
import { MockItems } from '@/mocks/PopUpDetailItemMocks';
import { PopUpDetailItem } from '@/types/DetailScreenItem';
import { useCallback } from 'react';
import { PopUpDetailMock } from '@/mocks/PopUpDetailMocks';

export default function PopUpDetailScreen() {
  const data = PopUpDetailMock;
  const renderHotItemWithIndex = useCallback(
    (item: PopUpDetailItem, index: number) => (
      <S.HotCardContainer key={item.id} isFirst={index === 0}>
        <S.HotItemImage source={{ uri: item.image }} style={item.image} />
        <S.Overlay />
        <S.HotItemTitle numberOfLines={1}>{item.title}</S.HotItemTitle>
        <S.HotItemPrice>{item.price}</S.HotItemPrice>
      </S.HotCardContainer>
    ),
    [],
  );

  const renderItem = useCallback(
    (item: PopUpDetailItem) => (
      <S.ItemCard key={item.id}>
        <S.ItemImage source={{ uri: item.image }} style={item.image} />
        <S.ItemTitle numberOfLines={1}>{item.title}</S.ItemTitle>
        <S.ItemPrice>{item.price}</S.ItemPrice>
      </S.ItemCard>
    ),
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <S.Banner source={require('@/assets/images/common/popupimg.png')} />

        <S.PopUpContentBox>
          <S.PopupTitle>{data.popupName}</S.PopupTitle>
          <S.SubInfoRow>
            <S.Icon source={require('@/assets/images/common/location-gray.webp')} />
            <S.PopupInfo>{`${data.popupOpenDate} - ${data.popupCloseDate}`}</S.PopupInfo>
          </S.SubInfoRow>
          <S.SubInfoRow>
            <S.Icon source={require('@/assets/images/common/calendar-gray.webp')} />
            <S.PopupInfo>{data.address}</S.PopupInfo>
          </S.SubInfoRow>
        </S.PopUpContentBox>

        <S.Divider />

        <S.PopUpContentBox>
          <S.SectionTitle style={{ marginBottom: 8 }}>운영시간</S.SectionTitle>
          <S.SubInfoRow>
            <S.Icon source={require('@/assets/images/common/clock-gray.webp')} />
            <S.PopupInfo>{`${data.runOpenTime.slice(0, 5)} - ${data.runCloseTime.slice(0, 5)}`}</S.PopupInfo>
          </S.SubInfoRow>

          <S.SectionTitle style={{ marginTop: 20, marginBottom: 12 }}>위치정보</S.SectionTitle>
          <S.MapImage source={{ uri: /* 나중에 지도로 변경 */ data.imageUrl }} />
        </S.PopUpContentBox>

        <S.DividerWide />

        <S.ItemContentBox>
          <S.ItemCategory style={{ marginTop: 40, marginBottom: 20 }}>WHAT’S HOT</S.ItemCategory>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MockItems.slice(0, 4).map((item, index) => renderHotItemWithIndex(item, index))}
          </ScrollView>
        </S.ItemContentBox>

        <S.ItemContentBox>
          <S.RowBetween>
            <S.ItemCategory>전체 상품</S.ItemCategory>
            <S.RightArrow source={require('@/assets/images/common/right-arrow.webp')} />
          </S.RowBetween>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 24 }}
          >
            {MockItems.slice(0, 4).map(renderItem)}
          </ScrollView>

          <S.BottomButtonWrapper>
            <CustomGradientBtn
              title="팝업 예약하기"
              height={54}
              onPress={() => {
                // TODO: 라우팅 구현 후 아래 줄 주석 해제
                // navigation.navigate('PopupReservation');
              }}
              icon={require('@/assets/images/common/store-gray.webp')}
            />
          </S.BottomButtonWrapper>
        </S.ItemContentBox>
      </ScrollView>
    </SafeAreaView>
  );
}
