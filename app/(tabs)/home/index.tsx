import { FlatList } from 'react-native-gesture-handler';
import { S } from './HomeScreen.style';
import { Dimensions, Image } from 'react-native';

const Images = {
  popUp01: require('@/assets/images/home/popUp01.webp'),
  hot01: require('@/assets/images/home/hot01.webp'),
  hot02: require('@/assets/images/home/hot02.webp'),
  calendarWhite: require('@/assets/images/home/calendar-white.webp'),
  locationWhite: require('@/assets/images/home/location-white.webp'),
};

const hotItems = [
  {
    id: '1',
    title: '여자친구 Season of Memories 자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.hot01,
  },
  {
    id: '2',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.hot02,
  },
  {
    id: '3',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.hot01,
  },
  {
    id: '4',
    title: '여자친구 Season of Memories',
    date: '24.11.15 - 24.11.29',
    location: '서울 영등포구 여의대로 108 더현대서울',
    image: Images.hot02,
  },
];

export default function HomeScreen() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <S.HomeScreenContainer>
      <Image
        source={Images.popUp01}
        style={{ width: screenWidth, height: undefined, marginTop: 72, aspectRatio: 3 / 4 }}
      />

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
              <S.HotCardSubTextContainer>
                <Image source={Images.calendarWhite} style={{ width: 11, height: 11 }} />{' '}
                <S.HotCardSubText> {item.date}</S.HotCardSubText>
              </S.HotCardSubTextContainer>
              <S.HotCardSubTextContainer>
                <Image source={Images.locationWhite} style={{ width: 11, height: 11 }} />{' '}
                <S.HotCardSubText> {item.location}</S.HotCardSubText>
              </S.HotCardSubTextContainer>
            </S.HotCardTextContainer>
          </S.HotCardContainer>
        )}
      />
      <S.SectionTitle>POP-UP NOW!</S.SectionTitle>
    </S.HomeScreenContainer>
  );
}
