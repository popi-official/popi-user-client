import styled from 'styled-components/native';

export const S = {
  PaymentResultContainer: styled.View`
    flex: 1;
    background-color: black;
    padding-horizontal: 12px;
    justify-content: space-between;
    padding-top: 100px;
  `,

  ContentContainer: styled.View`
    align-items: center;
    flex: 1;
  `,

  SuccessImage: styled.Image`
    width: 170px;
  `,

  TitleText: styled.Text`
    color: white;
    font-size: 20px;
  `,

  SubtitleText: styled.Text`
    color: gray;
    font-size: 16px;
  `,

  ButtonContainer: styled.TouchableOpacity`
    height: 56px;
  `,
};
