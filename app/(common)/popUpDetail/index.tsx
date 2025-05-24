import { ScrollView, TouchableOpacity } from 'react-native';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { S } from './PopUpDetail.style';
import { PopUpDetailMock } from '@/mocks/PopUpDetailMocks';
import { useRouter } from 'expo-router';
import { ParseJsonToString } from '@/utils/JsonParser';
import { PopUpDetailItem } from '@/types/DetailScreenType';
import HotItems from '@/components/entireItems/hotItems/HotItems';
import { PopUpDetailItemsMock } from '@/mocks/PopUpDetailItemMocks';

export default function PopUpDetailScreen() {
  const data = PopUpDetailMock;
  const router = useRouter();

  return (
    <S.Container>
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
          {PopUpDetailItemsMock.map((item, index) => (
            <HotItems key={index} item={item} index={index} />
          ))}
        </ScrollView>
      </S.ItemContentBox>

      <S.ItemContentBox>
        <S.RowBetween>
          <S.ItemCategoryAll>전체 상품</S.ItemCategoryAll>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/(common)/popUpDetail/entireItems',
                params: {
                  hotItems: ParseJsonToString(PopUpDetailItemsMock),
                  title: data.popupName,
                },
              })
            }
          >
            <S.RightArrow source={require('@/assets/images/common/right-arrow.webp')} />
          </TouchableOpacity>
        </S.RowBetween>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 24 }}
        >
          {PopUpDetailItemsMock.slice(0, 4).map((item: PopUpDetailItem, idx: number) => (
            <S.ItemCard key={idx}>
              <S.ItemImage source={{ uri: item.imagePath }} style={item.imagePath} />
              <S.ItemTitle numberOfLines={1}>{item.title}</S.ItemTitle>
              <S.ItemPrice>{item.price}</S.ItemPrice>
            </S.ItemCard>
          ))}
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
    </S.Container>
  );
}
