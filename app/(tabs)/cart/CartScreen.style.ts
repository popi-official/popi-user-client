import styled from 'styled-components/native';
import { getThemeColor, getThemePretendardFont } from '@/types';

export const S = {
  Container: styled.View`
    flex: 1;
    background-color: black;
    padding-bottom: 72px;
  `,

  AllCheckbox: styled.TouchableOpacity`
    width: 18px;
    height: 18px;
    margin-right: 6px;
    margin-top: 2px;
  `,
  AllSelectRow: styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 12px;
  `,
  AllCheckText: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('medium')};
    font-size: 16px;
    margin-left: 10px;
  `,

  Divider: styled.View`
    width: 100%;
    background-color: #92a0cc;
    height: 2px;
  `,

  DividerCart: styled.View`
    width: 100%;
    background-color: #404040;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 5px;
  `,

  ItemContainer: styled.View`
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 12px;
    margin-top: 5px;
  `,

  Checkbox: styled.TouchableOpacity`
    margin-right: 12px;
  `,

  ItemImage: styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 12px;
    margin-left: 10px;
  `,

  ItemInfoWrapper: styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  `,

  ItemTitleRow: styled.View`
    flex-direction: row;
    justify-content: space-between;
  `,

  ItemTitle: styled.Text`
    flex: 1;
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    font-family: ${getThemePretendardFont('semibold')};
  `,

  DeleteButton: styled.TouchableOpacity`
    padding: 4px;
  `,

  QuantityWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 45px;
  `,

  QuantityButton: styled.TouchableOpacity`
    width: 14px;
    height: 14px;
    align-items: center;
    justify-content: center;
    margin-left: 13px;
    margin-right: 13px;
  `,

  QuantityText: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 16px;
  `,

  PriceText: styled.Text`
    align-self: flex-end;
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    font-family: ${getThemePretendardFont('semibold')};
    margin-right: 12px;
  `,

  TotalRow: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    margin-top: 5px;
  `,

  TotalText: styled.Text`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 2px;
  `,

  TotalPrice: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 20px;
    font-family: ${getThemePretendardFont('semibold')};
    margin-bottom: 1px;
  `,
  ItemBottomRow: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  BottomButtonWrapper: styled.View`
    height: 56;
    align-items: center;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 24px;
  `,

  EmptyContainer: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding-bottom: 32px;
  `,

  EmptyText: styled.Text`
    font-size: 19px;
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('bold')};
    margin-bottom: 6px;
  `,

  EmptySubText: styled.Text`
    font-size: 16px;
    color: ${getThemeColor('gray04')};
    font-family: ${getThemePretendardFont('bold')};
    margin-bottom: 6px;
  `,

  EmptyImage: styled.Image`
    width: 328px;
    height: 228px;
    margin-bottom: 32px;
  `,
};
