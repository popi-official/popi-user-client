import { PADDING } from '@/constants/Options';
import { PostPopUpSearch } from '@/types/SearchScreenType';
import { useRouter } from 'expo-router';
import { Dimensions, Image } from 'react-native';
import { S } from './SearchResultPopUpItem.style';
import { usePopUpStore } from '@/store/usePopUpStore';

const { width } = Dimensions.get('window');

const images = {
  calendarIcon: require('@/assets/images/common/calendar-gray.webp'),
  addressIcon: require('@/assets/images/common/location-gray.webp'),
};

export default function SearchResultPopUpItem({
  popupId,
  popupName,
  imageUrl,
  popupOpenDate,
  popupCloseDate,
  address,
}: PostPopUpSearch) {
  const router = useRouter();
  const GAP = 12;
  const realWidth = (width - 2 * PADDING - GAP) / 2;
  const imageHeight = realWidth * (4 / 3);
  const { setSelectedPopUpId } = usePopUpStore();

  return (
    <S.PopUpContainer
      style={{ width: realWidth }}
      onPress={() => {
        setSelectedPopUpId(popupId);
        router.replace({ pathname: '/(common)/popUpDetail' });
      }}
    >
      {/* <OptimizedImage
        source={{ uri: imageUrl }}
        style={{
          width: realWidth,
          height: imageHeight,
          borderRadius: 12,
        }}
        resizeMode="cover"
      /> */}
      <Image
        source={{ uri: imageUrl }}
        style={{ height: imageHeight, borderRadius: 10 }}
        resizeMode="cover"
      />
      <S.PopUpInfoContainer>
        <S.PopUpName ellipsizeMode="tail">{popupName}</S.PopUpName>
        <S.DateRow>
          <S.DateIcon source={images.calendarIcon} />
          <S.DateText>{popupOpenDate} - </S.DateText>
          <S.DateText>{popupCloseDate}</S.DateText>
        </S.DateRow>
        <S.AddressRow>
          <S.AddressIcon source={images.addressIcon} resizeMode="contain" />
          <S.AddressText numberOfLines={1} ellipsizeMode="tail">
            {address}
          </S.AddressText>
        </S.AddressRow>
      </S.PopUpInfoContainer>
    </S.PopUpContainer>
  );
}
