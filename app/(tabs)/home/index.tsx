import { ActivityIndicator, Dimensions, FlatList, Image, View, Text, Button } from 'react-native';
import { S } from './HomeScreen.style';
import { bannerItems } from '@/mocks/HomeMocks';
import { formatDateRange } from '@/utils/FormatDate';
import { useRouter } from 'expo-router';
import { usePopUpStore } from '@/store/usePopUpStore';
import { usePopUpAllItemsApi } from '@/hooks/api/usePopUpAllItemsApi';
import Swiper from 'react-native-swiper';
import { useGetHotPopUpsApi } from '@/hooks/api/useHomeApi';

const Images = {
  calendarGray: require('@/assets/images/common/calendar-gray.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
};

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const horizontalPadding = 12 * 2;
  const cardGap = 12;
  const cardWidth = (screenWidth - horizontalPadding - cardGap) / 2;
  const router = useRouter();
  const setSelectedPopUpId = usePopUpStore(state => state.setSelectedPopUpId);
  const { hotItems, isLoading, isError } = useGetHotPopUpsApi();

  const {
    allItems,
    allItemsQuery: { fetchNextPage, hasNextPage, isFetchingNextPage },
  } = usePopUpAllItemsApi();

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError || !hotItems) {
    return <Text>조회 데이터가 없습니다.</Text>;
  }

  const renderItem = ({ item }: { item: any }) => (
    <S.PopUpCard
      cardWidth={cardWidth}
      onPress={() => {
        setSelectedPopUpId(item.popupId);
        router.push('/(common)/popUpDetail');
      }}
    >
      <S.PopUpImage source={{ uri: item.imageUrl }} cardWidth={cardWidth} resizeMode="cover" />
      <S.PopUpInfo cardWidth={cardWidth}>
        <S.PopUpCardTitle numberOfLines={1}>{item.popupName}</S.PopUpCardTitle>
        <S.PopUpCardSubTextContainer>
          <Image source={Images.calendarGray} style={{ width: 15, height: 15, marginTop: 2 }} />
          <S.PopUpCardSubText>
            {formatDateRange(item.popupOpenDate, item.popupCloseDate)}
          </S.PopUpCardSubText>
        </S.PopUpCardSubTextContainer>
        <S.PopUpCardSubTextContainer>
          <Image source={Images.locationGray} style={{ width: 15, height: 15, marginTop: 3 }} />
          <S.PopUpCardSubText numberOfLines={1} ellipsizeMode="tail">
            {item.address}
          </S.PopUpCardSubText>
        </S.PopUpCardSubTextContainer>
      </S.PopUpInfo>
    </S.PopUpCard>
  );

  const renderHeader = () => (
    <View>
      <Button onPress={() => router.push('/(common)/payment')} title="결제 페이지 이동" />
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

      <S.SectionTitle>WHAT’S HOT</S.SectionTitle>
      <FlatList
        data={hotItems}
        keyExtractor={item => String(item.popupId)}
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <S.HotCardContainer
            onPress={() => {
              setSelectedPopUpId(item.popupId);
              router.push('/(common)/popUpDetail');
            }}
            isFirst={index === 0}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 228, height: undefined, aspectRatio: 3 / 4 }}
            />
            <S.Overlay />
            <S.HotCardTextContainer>
              <S.HotCardTitle>{item.popupName}</S.HotCardTitle>
            </S.HotCardTextContainer>
          </S.HotCardContainer>
        )}
      />
      <S.SectionTitle>POP-UP NOW!</S.SectionTitle>
    </View>
  );

  return (
    <FlatList
      data={allItems}
      keyExtractor={item => String(item.popupId)}
      numColumns={2}
      columnWrapperStyle={{ gap: cardGap, marginBottom: 20, paddingHorizontal: 12 }}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={
        isFetchingNextPage ? <ActivityIndicator style={{ marginVertical: 20 }} /> : null
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.3}
      renderItem={renderItem}
    />
  );
};

export default HomeScreen;
