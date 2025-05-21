import { getThemeColor, getThemeFont } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const S = {
  HomeScreenContainer: styled.ScrollView`
    background-color: ${getThemeColor('gray11')};
  `,

  SectionTitle: styled.Text`
    color: white;
    font-style: italic;
    font-size: 26px;
    font-weight: 900;
    margin: 60px 0 30px 12px;
    font-style: ${getThemeFont('gmarket')}; /* inter로 변경 예정 */
  `,

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
    z-index: 2;
  `,

  HotCardTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-right: 10px;
  `,

  PopUpCardTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    font-weight: 600;
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
    color: ${getThemeColor('gray04')};
    font-size: 13px;
    font-weight: 400;
  `,

  BottomArea: styled.View`
    height: 72px;
    width: 100%;
  `,
};
