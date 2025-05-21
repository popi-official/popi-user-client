import { FlatList } from 'react-native-gesture-handler';
import { S } from './HomeScreen.style';
import { Dimensions, Image, View } from 'react-native';

const Images = {
  popUp01: require('@/assets/images/home/popUp01.webp'),
  popUp02: require('@/assets/images/home/popUp02.webp'),
  popUp03: require('@/assets/images/home/popUp03.webp'),
  calendarGray: require('@/assets/images/common/calendar-gray.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
};

const hotItems = [
  {
    id: '1',
    title: '여자친구 Season of Memories 여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp01,
  },
  {
    id: '2',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp02,
  },
  {
    id: '3',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp03,
  },
  {
    id: '4',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp01,
  },
];

const popUpItems = [
  {
    id: '1',
    title: '여자친구 Season of Memories 여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더',
    image: Images.popUp01,
  },
  {
    id: '2',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp02,
  },
  {
    id: '3',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp03,
  },
  {
    id: '4',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp01,
  },
  {
    id: '5',
    title: '여자친구 Season of Memories 여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp02,
  },
  {
    id: '6',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp03,
  },
  {
    id: '7',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp01,
  },
  {
    id: '8',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.popUp02,
  },
];

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
      <Image
        source={Images.popUp02}
        style={{ width: screenWidth, height: undefined, aspectRatio: 3 / 4 }}
      />
      {/* WHAT'S HOT */}
      <S.SectionTitle>WHAT’S HOT</S.SectionTitle>
      <FlatList
        data={hotItems}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <S.HotCardContainer isFirst={index === 0}>
            <Image
              source={item.image}
              style={{ width: 228, height: undefined, aspectRatio: 3 / 4 }}
            />
            <S.Overlay />
            <S.HotCardTextContainer>
              <S.HotCardTitle>{item.title}</S.HotCardTitle>
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
              <View key={item.id} style={{ width: cardWidth }}>
                <Image
                  source={item.image}
                  style={{
                    width: cardWidth,
                    height: cardWidth * (4 / 3),
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
                <View style={{ width: cardWidth, overflow: 'hidden', marginTop: 10 }}>
                  <S.PopUpCardTitle numberOfLines={1}>{item.title}</S.PopUpCardTitle>
                  <S.PopUpCardSubTextContainer>
                    <Image source={Images.calendarGray} style={{ width: 13, height: 13 }} />
                    <S.PopUpCardSubText>{item.date}</S.PopUpCardSubText>
                  </S.PopUpCardSubTextContainer>
                  <S.PopUpCardSubTextContainer>
                    <Image source={Images.locationGray} style={{ width: 13, height: 13 }} />
                    <S.PopUpCardSubText numberOfLines={1} ellipsizeMode="tail">
                      {item.location}
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
