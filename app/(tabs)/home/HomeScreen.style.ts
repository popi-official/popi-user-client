import { getThemeColor, getThemeFont } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const S = {
  HomeScreenContainer: styled.ScrollView`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
  `,

  SectionTitle: styled.Text`
    color: white;
    font-style: italic;
    font-size: 22px;
    font-weight: 900;
    margin: 46px 0 20px 24px;
    font-style: ${getThemeFont('gmarket')}; /* inter로 변경 예정 */
  `,

  HotCardContainer: styled.View<{ isFirst: boolean }>`
    width: 228px;
    height: 287px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-left: ${(props: { isFirst: boolean }) => (props.isFirst ? '24px' : '0px')};
    margin-right: 18px;
  `,

  Overlay: styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', '#000000'],
    start: { x: 0.7, y: 0 },
    end: { x: 0.7, y: 1 },
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
    width: 208px;
    z-index: 2;
  `,

  HotCardTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 2px;
    width: 208px;
  `,

  HotCardSubTextContainer: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  HotCardSubText: styled.Text`
    color: ${getThemeColor('gray02')};
    font-weight: 400;
    font-size: 11px;
  `,

  PopUpCardTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 2px;
    width: 208px;
  `,

  PopUpCardSubTextContainer: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  PopUpCardSubText: styled.Text`
    color: ${getThemeColor('gray04')};
    font-size: 10px;
    font-weight: 400;
  `,

  BottomArea: styled.View`
    height: 72px;
    width: 100%;
  `,
};
