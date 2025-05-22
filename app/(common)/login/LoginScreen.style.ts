import { getThemePretendardFont } from '@/types';
import { Image } from 'react-native';
import styled from 'styled-components/native';

type BackGroundFill = {
  color: string;
};

export const S = {
  LoginScreenContainer: styled.View`
    flex: 1;
    position: relative;
  `,

  BackGroundContainer: styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `,

  BackGroundImg: styled(Image)`
    width: 100%;
    height: 100%;
  `,

  ContentContainer: styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0 40px 0;
    z-index: 2;
  `,

  LoginLogoContainer: styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  `,

  LoginLogoImg: styled(Image)`
    width: 124px;
    height: 238px;
  `,

  OAuthLogoImg: styled(Image)`
    width: 20px;
    height: 20px;
  `,

  ButtonContainer: styled.View`
    width: 100%;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 150px;
    gap: 20px;
  `,

  OAuthLoginBtn: styled.TouchableOpacity<BackGroundFill>`
    width: 330px;
    height: 56px;
    background-color: ${(props: BackGroundFill) => props.color};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-direction: row;
  `,

  ButtonText: styled.Text`
    font-size: 16px;
    color: 'black';
    font-family: ${getThemePretendardFont('semibold')};
  `,
};
