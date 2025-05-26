import styled from 'styled-components/native';
import { getThemeColor, getThemeInterFont, getThemePretendardFont } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { EdgeInsets } from 'react-native-safe-area-context';

type ContainerProps = {
  inset: EdgeInsets;
};

export const S = {
  Container: styled.ScrollView<ContainerProps>`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
    margin-bottom: ${({ inset }: ContainerProps) => inset.bottom};
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
    padding-bottom: 12px;
  `,

  PopupTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('bold')};
    font-size: 22px;
    margin-bottom: 5px;
  `,

  PopupInfo: styled.Text`
    color: ${getThemeColor('gray04')};
    font-family: ${getThemePretendardFont('regular')};
    font-size: 16px;
  `,

  SectionTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('bold')};
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
    font-family: ${getThemeInterFont('blackItalic')};
  `,

  ItemCategoryAll: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 26px;
    font-family: ${getThemePretendardFont('extrabold')};
  `,

  ItemCategoryEng: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 26px;
    font-family: ${getThemeInterFont('blackItalic')};
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
    font-family: ${getThemePretendardFont('semibold')};
  `,

  HotItemPrice: styled.Text`
    position: absolute;
    bottom: 8px;
    left: 12px;
    z-index: 2;
    color: ${getThemeColor('gray01')};
    font-size: 13px;
    font-family: ${getThemePretendardFont('semibold')};
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
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 14px;
    color: ${getThemeColor('gray01')};
    margin-bottom: 4px;
  `,

  ItemPrice: styled.Text`
    font-size: 13px;
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('semibold')};
    margin-right: 2px;
    align-self: flex-end;
  `,

  CalendarSection: styled.View`
    border-bottom-width: 1px;
    border-bottom-color: white;
    padding-bottom: 16px;
  `,

  CalendarContainer: styled.View`
    padding-left: 12px;
    padding-right: 12px;
  `,

  ScrollView: styled.ScrollView``,

  TimeSlotScrollView: styled.ScrollView`
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 12px;
  `,

  TimeSlotButton: styled.TouchableOpacity`
    align-self: flex-start;
  `,

  TimeSlotGradient: styled(LinearGradient)<{ isSelected: boolean; isPossible: boolean }>`
    border-width: 1px;
    border-radius: 10px;
    border-color: ${({ isSelected, isPossible }: { isSelected: boolean; isPossible: boolean }) =>
      isSelected
        ? 'transparent'
        : isPossible
          ? `${getThemeColor('gray01')}`
          : `${getThemeColor('gray08')}`};
    background-color: ${getThemeColor('gray09')};
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    margin-right: 12px;
  `,

  TimeSlotText: styled.Text<{ isSelected: boolean; isPossible: boolean }>`
    color: ${({ isSelected, isPossible }: { isSelected: boolean; isPossible: boolean }) =>
      isSelected
        ? `${getThemeColor('gray11')}`
        : isPossible
          ? `${getThemeColor('gray01')}`
          : `${getThemeColor('gray06')}`};
    font-family: ${({ isSelected }: { isSelected: boolean }) =>
      isSelected ? `${getThemePretendardFont('medium')}` : `${getThemePretendardFont('regular')}`};
  `,

  ReservationButtonContainer: styled.View`
    height: 46px;
    margin-left: 24px;
    margin-right: 24px;
  `,
};
