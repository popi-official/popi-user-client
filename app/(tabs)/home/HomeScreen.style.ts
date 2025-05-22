import { getThemeColor, getThemeInterFont, getThemePretendardFont } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const S = {
  // screen
  HomeScreenContainer: styled.ScrollView`
    background-color: ${getThemeColor('gray11')};
  `,

  // swiper
  SwiperContainer: styled.View`
    width: ${Dimensions.get('window').width}px;
    aspect-ratio: 3 / 4;
  `,

  SwiperItem: styled.View`
    flex: 1;
    position: relative;
  `,

  BannerImage: styled.Image`
    width: 100%;
    height: 100%;
  `,

  BannerOverlay: styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', '#000000'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  })`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 160px;
    z-index: 1;
  `,

  BannerTextContainer: styled.View`
    position: absolute;
    z-index: 15;
    bottom: 40px;
    width: 100%;
    align-items: center;
  `,

  BannerTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('bold')};
    font-size: 24px;
  `,

  BannerSubtitle: styled.Text`
    font-family: ${getThemePretendardFont('bold')};
    color: #d9d9d9;
    font-size: 16px;
    margin-top: 4px;
  `,

  SwiperDot: styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border-width: 1px;
    border-color: ${getThemeColor('gray01')};
    background-color: transparent;
    margin: 6px;
  `,

  SwiperActiveDot: styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${getThemeColor('gray01')};
    margin: 6px;
  `,

  // Section Title
  SectionTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 26px;
    font-family: ${getThemeInterFont('blackItalic')};
    margin: 60px 0 30px 12px;
  `,

  // Hot Card
  HotCardContainer: styled.View<{ isFirst: boolean }>`
    width: 228px;
    height: 287px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-left: ${(props: { isFirst: boolean }) => (props.isFirst ? '12px' : '0px')};
    margin-right: 18px;
  `,

  Overlay: styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', '#000000'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  })`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
  `,

  HotCardTextContainer: styled.View`
    position: absolute;
    bottom: 11px;
    left: 10px;
    z-index: 2;
  `,

  HotCardTitle: styled.Text`
    font-family: ${getThemePretendardFont('bold')};
    color: ${getThemeColor('gray01')};
    font-size: 17px;
    margin-bottom: 10px;
    margin-right: 10px;
  `,

  // Pop-Up Card
  PopUpWrapper: styled.View`
    padding: 0 12px;
    margin-bottom: 40px;
  `,

  PopUpRow: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  `,

  PopUpCard: styled.View<{ cardWidth: number }>`
    width: ${(props: { cardWidth: number }) => `${props.cardWidth}px`};
  `,

  PopUpImage: styled.Image<{ cardWidth: number }>`
    width: ${(props: { cardWidth: number }) => `${props.cardWidth}px`};
    height: ${(props: { cardWidth: number }) => `${props.cardWidth * (4 / 3)}px`};
    border-radius: 10px;
  `,

  PopUpInfo: styled.View<{ cardWidth: number }>`
    width: ${(props: { cardWidth: number }) => `${props.cardWidth}px`};
    overflow: hidden;
    margin-top: 10px;
  `,

  PopUpCardTitle: styled.Text`
    font-family: ${getThemePretendardFont('bold')};
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    margin-bottom: 2px;
  `,

  PopUpCardSubTextContainer: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-top: 2px;
  `,

  PopUpCardSubText: styled.Text`
    font-family: ${getThemePretendardFont('light')};
    font-weight: 400;
    color: ${getThemeColor('gray04')};
    font-size: 13px;
    flex-shrink: 1;
  `,

  // Bottom
  BottomArea: styled.View`
    height: 72px;
    width: 100%;
  `,
};
