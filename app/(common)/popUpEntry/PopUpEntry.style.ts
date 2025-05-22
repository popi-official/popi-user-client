import { getThemeColor } from '@/types';
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
  `,

  TopCard: styled(LinearGradient).attrs({
    colors: ['#EEFAFF', '#B0CFFF'],
    start: { x: 0.4, y: 0.6 },
    end: { x: 1, y: 0.4 },
  })`
    position: absolute;
    width: ${Dimensions.get('window').width - 24}px;
    aspect-ratio: 2 / 1;
    border-radius: 30px 30px 20px 20px;
  `,

  QrCard: styled(LinearGradient).attrs({
    colors: ['rgba(0, 255, 238, 1)', '#ffffff'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  })`
    position: absolute;
    width: ${Dimensions.get('window').width - 24}px;
    aspect-ratio: 9 / 10;
    border-radius: 30px 20px;
  `,

  Title: styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 12px;
  `,

  InfoSection: styled.View`
    align-items: center;
    margin-bottom: 16px;
  `,

  PopupTitle: styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #333;
  `,

  Address: styled.Text`
    font-size: 14px;
    color: #666;
    margin-top: 4px;
  `,

  Time: styled.Text`
    font-size: 14px;
    color: #666;
    margin-top: 2px;
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
