import styled from 'styled-components/native';
import { getThemeColor, getThemeFont, getThemeFontWeight } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';

export const S = {
  Container: styled.View`
    flex: 1;
    background-color: black;
  `,

  Banner: styled.Image`
    width: 100%;
    height: 466px;
    margin-bottom: 14px;
  `,

  PopUpContentBox: styled.View`
    padding: 0 12px;
  `,

  ItemContentBox: styled.View`
    padding-left: 12px;
  `,

  PopupTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemeFont('pretendard')};
    font-weight: ${getThemeFontWeight('bold')};
    font-size: 22px;
    margin-bottom: 5px;
  `,

  PopupInfo: styled.Text`
    color: ${getThemeColor('gray04')};
    font-family: ${getThemeFont('pretendard')};
    font-weight: ${getThemeFontWeight('regular')};
    font-size: 16px;
  `,

  SectionTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemeFont('pretendard')};
    font-weight: ${getThemeFontWeight('bold')};
    font-size: 18px;
  `,

  MapImage: styled.Image`
    width: 100%;
    height: 163px;
    border-radius: 10px;
  `,

  RowBetween: styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 20px;
  `,

  Icon: styled.Image`
    width: 16px;
    height: 16px;
    margin-right: 4px;
  `,

  RightArrow: styled.Image`
    width: 26px;
    height: 26px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 12px;
  `,

  SubInfoRow: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  Divider: styled.View`
    width: 100%;
    background-color: #323232;
    height: 1px;
    margin-top: 24px;
    margin-bottom: 14px;
  `,

  DividerWide: styled.View`
    width: 100%;
    background-color: #404040;
    height: 2px;
    margin-top: 38px;
  `,

  ItemCategory: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 26px;
    font-family: ${getThemeFont('pretendard')};
    font-weight: ${getThemeFontWeight('semibold')};
  `,

  ItemCategoryEng: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 26px;
    font-family: 'Inter-BlackItalic';
  `,

  HotItemImage: styled.Image`
    width: 100%;
    height: 100%;
  `,

  HotCardContainer: styled.View<{ isFirst: boolean }>`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
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
  HotItemTitle: styled.Text`
    position: absolute;
    bottom: 30px;
    left: 8px;
    right: 8px;
    z-index: 2;
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    font-family: ${getThemeFont('pretendard')};
    font-weight: ${getThemeFontWeight('semibold')};
  `,

  HotItemPrice: styled.Text`
    position: absolute;
    bottom: 8px;
    left: 12px;
    z-index: 2;
    color: ${getThemeColor('gray01')};
    font-size: 13px;
    font-family: ${getThemeFont('pretendard')};
    font-weight: ${getThemeFontWeight('semibold')};
  `,

  ItemCard: styled.View`
    width: 120px;
    margin-right: 8px;
  `,

  ItemImage: styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-bottom: 5px;
  `,

  ItemTitle: styled.Text`
    font-size: 14px;
    color: ${getThemeColor('gray01')};
    margin-bottom: 4px;
  `,

  ItemPrice: styled.Text`
    font-size: 13px;
    color: ${getThemeColor('gray01')};
    font-weight: 600;
    margin-right: 2px;
    align-self: flex-end;
  `,

  BottomButtonWrapper: styled.View`
    margin-right: 12px;
    margin-top: 62px;
  `,
};
