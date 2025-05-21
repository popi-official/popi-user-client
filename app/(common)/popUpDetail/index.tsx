import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { S } from './PopUpDetail.style';
import { MockItems } from '@/mocks/PopUpDetailScreenMocks';
import { Item } from '@/types/detailScreen';

export default function PopUpDetailScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <S.Banner source={require('@/assets/images/common/popupimg.png')} />

        <S.PopUpContentBox>
          <S.PopupTitle>아이브 EMPATHY 팝업스토어</S.PopupTitle>
          <S.SubInfoRow>
            <S.Icon source={require('@/assets/images/common/location-gray.webp')} />
            <S.PopupInfo>24.11.15 - 24.11.29</S.PopupInfo>
          </S.SubInfoRow>
          <S.SubInfoRow>
            <S.Icon source={require('@/assets/images/common/calendar-gray.webp')} />
            <S.PopupInfo>서울 영등포구 여의대로 108 타임컨시티서울</S.PopupInfo>
          </S.SubInfoRow>
        </S.PopUpContentBox>

        <S.Divider />
        <S.PopUpContentBox>
          <S.SectionTitle style={{ marginBottom: 8 }}>운영시간</S.SectionTitle>
          <S.SubInfoRow>
            <S.Icon source={require('@/assets/images/common/clock-gray.webp')} />
            <S.PopupInfo>월~일 · 10:30 - 22:00 </S.PopupInfo>
          </S.SubInfoRow>

          <S.SectionTitle style={{ marginTop: 20, marginBottom: 12 }}>위치정보</S.SectionTitle>
          <S.MapImage source={require('@/assets/images/login/google-logo.png')} />
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

const renderHotItemWithIndex = (item: Item, index: number) => (
  <S.HotCardContainer key={item.id} isFirst={index === 0}>
    <S.HotItemImage source={{ uri: item.image }} style={item.image} />
    <S.Overlay />
    <S.HotItemTitle numberOfLines={1}>{item.title}</S.HotItemTitle>
    <S.HotItemPrice>{item.price}</S.HotItemPrice>
  </S.HotCardContainer>
);

const renderItem = (item: Item) => (
  <S.ItemCard key={item.id}>
    <S.ItemImage source={{ uri: item.image }} style={item.image} />
    <S.ItemTitle numberOfLines={1}>{item.title}</S.ItemTitle>
    <S.ItemPrice>{item.price}</S.ItemPrice>
  </S.ItemCard>
);
