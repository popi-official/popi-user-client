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

  Card: styled.View`
    width: ${Dimensions.get('window').width - 24}px;
    border-radius: 30px;
    position: relative;
    aspect-ratio: 1 / 1.59;
  `,

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
    font-size: 13px;
    color: #777;
    margin-bottom: 20px;
  `,

  QRWrapper: styled.View`
    background-color: #fff;
    padding: 12px;
    border-radius: 16px;
    margin-bottom: 24px;
  `,

  ButtonRow: styled.View`
    flex-direction: row;
    gap: 16px;
  `,

  Button: styled.TouchableOpacity<{ disabled?: boolean }>`
    background-color: ${(props: { disabled?: boolean }) => (props.disabled ? '#eee' : '#fff')};
    padding: 12px 24px;
    border-radius: 20px;
    border: 1px solid #ccc;
  `,

  ButtonText: styled.Text<{ disabled?: boolean }>`
    color: ${(props: { disabled?: boolean }) => (props.disabled ? '#aaa' : '#000')};
    font-weight: 600;
  `,
};
