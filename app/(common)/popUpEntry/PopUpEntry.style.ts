import { getThemeColor, getThemeFont } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const S = {
  // screen
  PopUpEntryScreenContainer: styled.ScrollView`
    background-color: ${getThemeColor('gray11')};
    padding: 12px;
  `,

  // Card
  Card: styled.View`
    width: ${Dimensions.get('window').width - 24}px;
    border-radius: 30px;
    position: relative;
    aspect-ratio: 1 / 1.59;
  `,

  // TopCard
  TopCard: styled(LinearGradient).attrs({
    colors: ['#EDF9FF', '#EEFAFF', '#B0CFFF'],
    locations: [0, 0.42, 0.77],
    start: { x: 0.6, y: 1 },
    end: { x: 0.8, y: -0.2 },
  })`
    position: absolute;
    top: 0;
    width: ${Dimensions.get('window').width - 24}px;
    aspect-ratio: 2 / 1;
    border-radius: 30px 30px 20px 20px;
  `,

  Title: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    font-size: 30px;
    font-weight: bold;
    color: ${getThemeColor('gray10')};
    margin: 21px 0 0 28px;
  `,

  CameraBoy: styled.Image`
    position: absolute;
    right: 12px;
    top: 6px;
  `,

  PopUpTitleContainer: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    margin: 11px 0 5px 24px;
  `,

  PopupTitle: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    font-weight: bold;
    font-size: 18px;
    color: ${getThemeColor('gray08')};
  `,

  InfoTextContainer: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin: 1px 0 0 24px;
  `,

  InfoText: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    font-weight: 500;
    font-size: 15px;
    color: ${getThemeColor('gray06')};
  `,

  //QrCard
  QrCard: styled(LinearGradient).attrs({
    colors: ['#EDF9FF', '#EEFAFF', '#B0CFFF'],
    locations: [0, 0.42, 0.77],
    start: { x: 0.3, y: 0.4 },
    end: { x: 0, y: 1.2 },
  })`
    position: absolute;
    bottom: 0;
    width: ${Dimensions.get('window').width - 24}px;
    aspect-ratio: 9 / 10;
    border-radius: 20px 20px 30px 30px;
  `,

  Description: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    font-weight: 500;
    font-size: 14px;
    color: ${getThemeColor('gray06')};
    margin-top: 16px;
    text-align: center;
  `,

  QRWrapper: styled.View`
    width: 240px;
    height: 240px;
    align-self: center;
    margin: 16px 0 20px;
    background-color: ${getThemeColor('gray01')};
    padding: 30px;
    border-radius: 50px;
    display: center;
    justify-content: center;
    align-items: center;
  `,

  ButtonRow: styled.View`
    margin-top: 20px;
    flex-direction: row;
    align-self: center;
    gap: 24px;
  `,

  Button: styled.TouchableOpacity`
    background-color: ${getThemeColor('gray01')};
    width: 100px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
  `,

  ButtonText: styled.Text<{ isCancel?: boolean }>`
    color: ${(props: { isCancel?: boolean }) =>
      props.isCancel ? getThemeColor('gray04') : getThemeColor('gray07')};
    font-weight: 700;
  `,

  SectionTitle: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    color: ${getThemeColor('gray01')};
    font-weight: 800;
    font-size: 26px;
    margin-top: 46px;
  `,

  SectionDescription: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    color: ${getThemeColor('gray05')};
    font-weight: 500;
    font-size: 15px;
    margin-top: 4px;
    margin-bottom: 20px;
  `,

  GoodsContainer: styled.View`
    width: ${Dimensions.get('window').width - 24}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  `,

  GoodsItem: styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${(Dimensions.get('window').width - 24 - 12 * 2) / 3}px;
  `,

  GoodsImage: styled.Image`
    width: ${(Dimensions.get('window').width - 24 - 12 * 2) / 3}px;
    height: ${(Dimensions.get('window').width - 24 - 12 * 2) / 3}px;
    border-radius: 10px;
    margin-bottom: 8px;
  `,

  GoodsName: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    color: ${getThemeColor('gray01')};
    width: ${(Dimensions.get('window').width - 24 - 12 * 2) / 3}px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
  `,

  GoodsPrice: styled.Text`
    font-family: ${getThemeFont('pretendard')};
    color: ${getThemeColor('gray05')};
    width: ${(Dimensions.get('window').width - 24 - 12 * 2) / 3}px;
    text-align: center;
    font-weight: 500;
    font-size: 13px;
  `,

  // Bottom
  BottomArea: styled.View`
    height: 72px;
    width: 100%;
  `,
};
