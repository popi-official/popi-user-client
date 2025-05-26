import { PADDING } from '@/constants/Options';
import { PostPopUpSearch } from '@/types/SearchScreenType';
import { useRouter } from 'expo-router';
import { Dimensions, ImageSourcePropType } from 'react-native';
import { S } from './SearchResultPopUpItem.style';

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

  return (
    <S.PopUpContainer
      style={{ width: realWidth }}
      onPress={() => router.replace({ pathname: '/(common)/popUpDetail', params: { popupId } })}
    >
      <S.PopUpImage
        source={imageUrl as ImageSourcePropType}
        style={{
          width: realWidth,
          height: realWidth * (4 / 3),
        }}
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
