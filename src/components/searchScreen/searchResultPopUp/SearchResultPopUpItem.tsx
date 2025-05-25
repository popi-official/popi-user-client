import { PADDING } from '@/constants/Options';
import { PostPopUpSearch } from '@/types/SearchScreenType';
import { Dimensions, Image, ImageSourcePropType, Text, View } from 'react-native';

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
  const GAP = 12;
  const realWidth = (width - 2 * PADDING - GAP) / 2;

  return (
    <View
      style={{
        width: realWidth,
        marginBottom: 20,
      }}
    >
      <Image
        source={imageUrl as ImageSourcePropType}
        style={{
          width: realWidth,
          height: realWidth * 1.4,
          borderRadius: 12,
        }}
        resizeMode="cover"
      />
      <View style={{ paddingTop: 8 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 4,
            flexShrink: 1,
          }}
          ellipsizeMode="tail"
        >
          {popupName}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
          <Image source={images.calendarIcon} style={{ width: 11, height: 11 }} />
          <Text
            style={{
              color: '#888',
              fontSize: 12,
              marginBottom: 2,
              alignItems: 'center',
            }}
          >
            {popupOpenDate} -{' '}
          </Text>
          <Text
            style={{
              color: '#888',
              fontSize: 12,
              marginBottom: 2,
              alignItems: 'center',
            }}
          >
            {popupCloseDate}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            maxWidth: '100%',
          }}
        >
          <Image
            source={images.addressIcon}
            style={{ width: 11, height: 11 }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: '#888',
              fontSize: 12,
              flexShrink: 1,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {address}
          </Text>
        </View>
      </View>
    </View>
  );
}
