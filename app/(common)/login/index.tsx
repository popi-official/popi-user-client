import { useOAuth } from '@/hooks/useOAuth';
import { S } from './LoginScreen.style';

const Images = {
  logo: require('@/assets/images/splash-icon.png'),
  backGround: require('@/assets/images/login/background.png'),
  kakaoLogo: require('@/assets/images/login/kakao-logo.png'),
  googleLogo: require('@/assets/images/login/google-logo.png'),
};

export default function LoginScreen() {
  const { handleKakaoLogin } = useOAuth();

  return (
    <S.LoginScreenContainer>
      <S.BackGroundContainer>
        <S.BackGroundImg source={Images.backGround} resizeMode="cover" />
      </S.BackGroundContainer>

      <S.ContentContainer>
        <S.LoginLogoContainer>
          <S.LoginLogoImg source={Images.logo} resizeMode="contain" />
        </S.LoginLogoContainer>

        <S.ButtonContainer>
          <S.OAuthLoginBtn color={'#FEE500'} onPress={handleKakaoLogin}>
            <S.OAuthLogoImg source={Images.kakaoLogo} resizeMode="contain" />
            <S.ButtonText>카카오 로그인</S.ButtonText>
          </S.OAuthLoginBtn>
          <S.OAuthLoginBtn color={'white'}>
            <S.OAuthLogoImg source={Images.googleLogo} resizeMode="contain" />
            <S.ButtonText>구글 로그인</S.ButtonText>
          </S.OAuthLoginBtn>
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.LoginScreenContainer>
  );
}
