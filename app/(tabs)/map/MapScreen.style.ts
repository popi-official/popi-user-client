import { getThemeColor, getThemePretendardFont } from '@/types';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const S = {
  // screen
  MapScreenContainer: styled.View`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
    position: relative;
  `,

  // BottomSheet
  BottomSheetTitle: styled.Text`
    font-family: ${getThemePretendardFont('extrabold')};
    font-size: 26px;
    color: ${getThemeColor('gray01')};
    margin: 12px 12px 12px 0;
  `,

  // 구분선
  Divider: styled.View`
    width: ${Dimensions.get('window').width}px;
    background-color: ${getThemeColor('gray06')};
    height: 1px;
    margin-left: -12px;
  `,

  CardContainer: styled.TouchableOpacity`
    flex-direction: row;
    padding-top: 16px;
    padding-bottom: 16px;
  `,

  StyledImage: styled.Image`
    width: 109px;
    height: 131px;
    border-radius: 10px;
    margin-right: 12px;
  `,

  RightWrapper: styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  `,

  TextGroup: styled.View`
    display: flex;
    flex-direction: column;
  `,

  Title: styled.Text`
    font-family: ${getThemePretendardFont('bold')};
    font-size: 18px;
    color: ${getThemeColor('gray02')};
  `,

  SubTextContainer: styled.View`
    display: flex;
    flex-direction: row;
  `,

  SubText: styled.Text`
    font-family: ${getThemePretendardFont('regular')};
    font-size: 14px;
    color: ${getThemeColor('gray04')};
  `,

  DarkDivider: styled.View`
    background-color: ${getThemeColor('gray08')};
    height: 1px;
    width: ${Dimensions.get('window').width}px;
    margin-left: -12px;
  `,
};
