import { S } from './ErrorScreen.style';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function ErrorScreen() {
    const router = useRouter();

    return(
        <S.Container>
        <S.TextContainer>
          <S.Title>예기치 못한 문제가 발생했어요</S.Title>
          <S.Subtitle>홈으로 이동한 후, 다시 시도해주세요</S.Subtitle>
        </S.TextContainer>
    
        <S.ImageWrapper>
          <Image
            source={require('@/assets/images/error/error.webp')}
            style={{ width: 256, height: 191 }}
            resizeMode="contain"
          />
        </S.ImageWrapper>
    
        <S.GradientButton
          title="HOME"
          //onPress={() => router.push()}
          fontSize={15}
          fontWeight="700"
        />
      </S.Container>
    );
}