import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  Container: styled.View`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
  `,

  ScrollView: styled.ScrollView`
    flex: 1;
  `,

  Content: styled.View`
    padding: 12px;
    padding-bottom: 100px;
  `,

  PaymentInfoCard: styled.View`
    background-color: #111;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 24px;
    border-width: 1px;
    border-color: #333;
  `,

  InfoRow: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  `,

  InfoLabel: styled.Text`
    font-size: 14px;
    color: #999;
    font-family: ${getThemePretendardFont('medium')};
  `,

  InfoValue: styled.Text`
    font-size: 16px;
    color: white;
    font-family: ${getThemePretendardFont('semibold')};
  `,

  AmountText: styled.Text`
    font-size: 18px;
    color: #c3e4f5;
    font-family: ${getThemePretendardFont('bold')};
  `,

  Section: styled.View`
    margin-bottom: 32px;
  `,

  SectionTitle: styled.Text`
    font-size: 18px;
    font-family: ${getThemePretendardFont('semibold')};
    color: white;
    margin-bottom: 16px;
  `,

  PgContainer: styled.View`
    flex-direction: row;
    gap: 12px;
  `,

  PgButton: styled.TouchableOpacity<{ isSelected: boolean }>`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #111;
    border-radius: 12px;
    border-width: 1px;
    border-color: ${(props: { isSelected: BlobOptions }) =>
      props.isSelected ? '#C3E4F5' : '#333'};
    background-color: ${(props: { isSelected: BlobOptions }) =>
      props.isSelected ? '#001a33' : '#111'};
    padding-horizontal: 16px;
    padding-vertical: 16px;
  `,

  PgButtonText: styled.Text<{ isSelected: boolean }>`
    font-size: 14px;
    color: ${(props: { isSelected: boolean }) => (props.isSelected ? '#C3E4F5' : '#ccc')};
    font-family: ${(props: { isSelected: boolean }) =>
      props.isSelected ? 'Pretendard-Semibold' : 'Pretendard-Medium'};
  `,

  InputGroup: styled.View`
    margin-bottom: 20px;
  `,

  InputLabel: styled.Text`
    font-size: 14px;
    color: white;
    font-family: Pretendard-Medium;
    margin-bottom: 8px;
  `,

  Input: styled.TextInput`
    background-color: #111;
    border-radius: 12px;
    border-width: 1px;
    border-color: #333;
    padding-horizontal: 16px;
    padding-vertical: 14px;
    font-size: 16px;
    color: white;
    font-family: ${getThemePretendardFont('regular')};
  `,

  BottomContainer: styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #111;
    padding-horizontal: 20px;
    padding-vertical: 20px;
    padding-bottom: 40px;
    border-top-width: 1px;
    border-top-color: #333;
  `,

  TotalAmountContainer: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `,

  TotalLabel: styled.Text`
    font-size: 16px;
    color: #ccc;
    font-family: ${getThemePretendardFont('medium')};
  `,

  TotalAmount: styled.Text`
    font-size: 20px;
    color: #c3e4f5;
    font-family: ${getThemePretendardFont('semibold')};
  `,

  PaymentButton: styled.TouchableOpacity<{ isDisabled: boolean }>`
    background-color: ${(props: { isDisabled: boolean }) =>
      props.isDisabled ? '#333' : '#C3E4F5'};
    border-radius: 16px;
    padding-vertical: 18px;
    align-items: center;
  `,

  PaymentButtonText: styled.Text`
    font-size: 18px;
    color: black;
    font-family: Pretendard-Bold;
  `,

  PaymentContainer: styled.View`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
  `,

  PaymentHeader: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-horizontal: 20px;
    padding-vertical: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #333;
    position: relative;
  `,

  CancelButton: styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    padding: 4px;
  `,

  PaymentHeaderTitle: styled.Text`
    font-size: 18px;
    color: white;
    font-family: ${getThemePretendardFont('semibold')};
  `,

  LoadingContainer: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #000;
  `,

  LoadingText: styled.Text`
    font-size: 16px;
    color: white;
    font-family: ${getThemePretendardFont('medium')};
    margin-top: 20px;
  `,
};
