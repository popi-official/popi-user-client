import styled from 'styled-components/native';
import CustomGrayBtn from '../customGrayBtn/CustomGrayBtn';
import CustomGradientBtn from '../customGradientBtn/CustomGradientBtn';
import { getThemeColor, getThemePretendardFont } from '@/types';

export const S = {
  Backdrop: styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  Container: styled.View`
    position: absolute;
    top: 35%;
    align-self: center;
    width: 342px;
    height: 198px;
    background-color: #000000;
    border: 1px solid #929292;
    border-radius: 20px;
    padding-top: 55px;
  `,

  TitleWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 49px;
  `,
  Icon: styled.View`
    width: 30px;
    height: 30px;
  `,
  Title: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 20px;
    color: #ffffff;
    text-align: center;
  `,

  ButtonRowCenter: styled.View`
    flex-direction: row;
    justify-content: center;
  `,
  ButtonRowBetween: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
  `,
  GrayButton: styled(CustomGrayBtn)`
    width: 100px;
    height: 46px;
    border: 1px solid ${getThemeColor('gray05')};
    font-family: ${getThemePretendardFont('medium')};
  `,
  GradientButton: styled(CustomGradientBtn)`
    width: 100px;
    height: 46px;
    font-family: ${getThemePretendardFont('medium')};
  `,
};
