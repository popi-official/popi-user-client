import Swiper from 'react-native-swiper';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions, Image } from 'react-native';
import { S } from './HomeScreen.style';
import { bannerItems, hotItems, popUpItems } from '@/mocks/HomeScreenMocks';
import { formatDateRange } from '@/utils/FormatDate';

const Images = {
  calendarGray: require('@/assets/images/common/calendar-gray.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
};

const HomeScreen = () => {
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
    <S.HomeScreenContainer showsVerticalScrollIndicator={false}>
      <S.SwiperContainer>
        <Swiper
          autoplay
          loop
          showsPagination
          paginationStyle={{ bottom: 10 }}
          dot={<S.SwiperDot />}
          activeDot={<S.SwiperActiveDot />}
          autoplayTimeout={4}
        >
          {bannerItems.map((item, idx) => (
            <S.SwiperItem key={idx}>
              <S.BannerImage source={item.image} />
              <S.BannerOverlay />
              <S.BannerTextContainer>
                <S.BannerTitle>{item.title}</S.BannerTitle>
                <S.BannerSubtitle>{item.subTitle}</S.BannerSubtitle>
              </S.BannerTextContainer>
            </S.SwiperItem>
          ))}
        </Swiper>
      </S.SwiperContainer>
      {/* WHAT'S HOT */}
      <S.SectionTitle>WHAT’S HOT</S.SectionTitle>
      <FlatList
        data={hotItems}
        keyExtractor={item => String(item.popupId)}
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
      <S.PopUpWrapper>
        {groupedPopUps.map((row, rowIdx) => (
          <S.PopUpRow key={`row-${rowIdx}`}>
            {row.map(item => (
              <S.PopUpCard key={item.popupId} cardWidth={cardWidth}>
                <S.PopUpImage source={item.imageUrl} cardWidth={cardWidth} resizeMode="cover" />
                <S.PopUpInfo cardWidth={cardWidth}>
                  <S.PopUpCardTitle numberOfLines={1}>{item.popupName}</S.PopUpCardTitle>
                  <S.PopUpCardSubTextContainer>
                    <Image
                      source={Images.calendarGray}
                      style={{ width: 15, height: 15, marginTop: 2 }}
                    />
                    <S.PopUpCardSubText>
                      {formatDateRange(item.popupOpenDate, item.popupCloseDate)}
                    </S.PopUpCardSubText>
                  </S.PopUpCardSubTextContainer>
                  <S.PopUpCardSubTextContainer>
                    <Image
                      source={Images.locationGray}
                      style={{ width: 15, height: 15, marginTop: 3 }}
                    />
                    <S.PopUpCardSubText numberOfLines={1} ellipsizeMode="tail">
                      {item.address}
                    </S.PopUpCardSubText>
                  </S.PopUpCardSubTextContainer>
                </S.PopUpInfo>
              </S.PopUpCard>
            ))}
            {row.length === 1 && <S.PopUpCard cardWidth={cardWidth} />}
          </S.PopUpRow>
        ))}
      </S.PopUpWrapper>
      <S.BottomArea />
    </S.HomeScreenContainer>
  );
};

export default HomeScreen;
