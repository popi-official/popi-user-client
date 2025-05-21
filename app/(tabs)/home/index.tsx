import { FlatList } from 'react-native-gesture-handler';
import { S } from './HomeScreen.style';
import { Dimensions, Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { bannerItems, hotItems, popUpItems } from '@/constants/Home';
import { formatDateRange } from '@/utils/FormatDate';

const Images = {
  calendarGray: require('@/assets/images/common/calendar-gray.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
};

export default function HomeScreen() {
  const screenWidth = Dimensions.get('window').width;
  const horizontalPadding = 12 * 2;
  const cardGap = 12;
  const cardWidth = (screenWidth - horizontalPadding - cardGap) / 2;

  const groupedPopUps = popUpItems.reduce(
    (acc, cur, i) => {
      const row = Math.floor(i / 2);
      if (!acc[row]) acc[row] = [];
      acc[row].push(cur);
      return acc;
    },
    [] as (typeof popUpItems)[],
  );

  return (
    <S.HomeScreenContainer>
      <View style={{ width: screenWidth, aspectRatio: 3 / 4 }}>
        <Swiper
          autoplay
          loop
          showsPagination
          paginationStyle={{
            bottom: 10,
          }}
          dot={
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: 'transparent',
                marginHorizontal: 6,
              }}
            />
          }
          activeDot={
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: 'white',
                marginHorizontal: 6,
              }}
            />
          }
          autoplayTimeout={4}
        >
          {bannerItems.map((item, idx) => (
            <View
              key={idx}
              style={{
                flex: 1,
                position: 'relative',
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: screenWidth,
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
              <S.BannerOverlay />
              <View
                style={{
                  position: 'absolute',
                  zIndex: 15,
                  bottom: 32,
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                  {item.title}
                </Text>
                <Text style={{ color: '#D9D9D9', fontSize: 16, marginTop: 6, fontWeight: 600 }}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
      {/* WHAT'S HOT */}
      <S.SectionTitle>WHAT’S HOT</S.SectionTitle>
      <FlatList
        data={hotItems}
        keyExtractor={item => item.popupId}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <S.HotCardContainer isFirst={index === 0}>
            <Image
              source={item.imageUrl}
              style={{ width: 228, height: undefined, aspectRatio: 3 / 4 }}
            />
            <S.Overlay />
            <S.HotCardTextContainer>
              <S.HotCardTitle>{item.popupName}</S.HotCardTitle>
            </S.HotCardTextContainer>
          </S.HotCardContainer>
        )}
      />
      {/* POP-UP NOW! */}
      <S.SectionTitle>POP-UP NOW!</S.SectionTitle>
      <View style={{ paddingHorizontal: 12, marginBottom: 40 }}>
        {groupedPopUps.map((row, rowIdx) => (
          <View
            key={`row-${rowIdx}`}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            {row.map(item => (
              <View key={item.popupId} style={{ width: cardWidth }}>
                <Image
                  source={item.imageUrl}
                  style={{
                    width: cardWidth,
                    height: cardWidth * (4 / 3),
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
                <View style={{ width: cardWidth, overflow: 'hidden', marginTop: 10 }}>
                  <S.PopUpCardTitle numberOfLines={1}>{item.popupName}</S.PopUpCardTitle>
                  <S.PopUpCardSubTextContainer>
                    <Image source={Images.calendarGray} style={{ width: 15, height: 15 }} />
                    <S.PopUpCardSubText>
                      {formatDateRange(item.popupOpenDate, item.popupCloseDate)}
                    </S.PopUpCardSubText>
                  </S.PopUpCardSubTextContainer>
                  <S.PopUpCardSubTextContainer>
                    <Image source={Images.locationGray} style={{ width: 15, height: 15 }} />
                    <S.PopUpCardSubText numberOfLines={1} ellipsizeMode="tail">
                      {item.address}
                    </S.PopUpCardSubText>
                  </S.PopUpCardSubTextContainer>
                </View>
              </View>
            ))}
            {/* 홀수 개수일 때 오른쪽에 빈 박스 채우기 */}
            {row.length === 1 && <View style={{ width: cardWidth }} />}
          </View>
        ))}
      </View>
      <S.BottomArea />
    </S.HomeScreenContainer>
  );
}
