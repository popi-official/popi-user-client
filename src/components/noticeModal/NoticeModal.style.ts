import styled from 'styled-components/native';
import { getThemeColor, getThemePretendardFont } from '@/types';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type ContainerProps = {
  isSubTitle?: boolean;
};

export const S = {
  Backdrop: styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  `,
  Container: styled.View<ContainerProps>`
    position: absolute;
    top: 35%;
    align-self: center;
    width: ${Dimensions.get('window').width - 60}px;
    height: 198px;
    background-color: #000000;
    border: 1px solid #929292;
    border-radius: 20px;
    padding-top: ${(props: ContainerProps) => (props.isSubTitle ? '40px' : '55px')};
  `,

  TitleWrapper: styled.View<ContainerProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: ${(props: ContainerProps) => (props.isSubTitle ? '30px' : '49px')};
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

  SubTitle: styled.Text`
    font-family: ${getThemePretendardFont('medium')};
    font-size: 16px;
    color: ${getThemeColor('gray05')};
    text-align: center;
  `,

  ButtonRowCenter: styled.View`
    flex-direction: row;
    justify-content: center;
  `,

  GrayButton: styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    min-width: 100px;
    min-height: 46px;
    padding: 10px 16px;
    font-family: ${getThemePretendardFont('medium')};
    border: 1px solid ${getThemeColor('gray05')};
    font-family: ${getThemePretendardFont('medium')};
    border-radius: 12px;
    background-color: ${getThemeColor('gray08')};
  `,

  GrayButtonText: styled.Text`
    font-size: 18px;
    font-family: ${getThemePretendardFont('medium')};
    color: ${getThemeColor('gray03')};
  `,

  ButtonContainer: styled.TouchableOpacity`
    overflow: hidden;
  `,

  GradientBackground: styled(LinearGradient)`
    align-items: center;
    justify-content: center;
    min-width: 100px;
    min-height: 46px;
    padding: 10px 16px;
    font-family: ${getThemePretendardFont('medium')};
    border-radius: 12px;
  `,

  GradientButtonText: styled.Text`
    font-size: 18px;
    font-family: ${getThemePretendardFont('medium')};
    color: ${getThemeColor('gray11')};
  `,
};
