import { Dimensions, Image, Text, View } from 'react-native';
import { S } from './Style.style';
import { myReservationsMock } from '@/mocks/MyPageMocks';
import { useOAuth } from '@/hooks/useOAuth';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'expo-router';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';

const { width } = Dimensions.get('window');
const Images = {
  icon: require('@/assets/images/signUp/icon.webp'),
};

export default function MyScreen() {
  const { handleLogout, handleDeleteProfile } = useOAuth();
  const { isLogin, profile } = useAuthStore();
  const router = useRouter();
  const data = myReservationsMock;
  const leftWidth = width * 0.55;

  return (
    <S.StyleContainer>
      {isLogin ? (
        <S.PopUpEntryScreenContainer>
          <S.Title>MY POPI</S.Title>

          <S.Greeting>
            {profile.nickname}님, 오늘이 <S.Highlight>예약일</S.Highlight>이에요!
          </S.Greeting>

          <S.Character source={require('@/assets/images/my/my-character.webp')} />

          <S.ReservationTitle>내 예약</S.ReservationTitle>

          {[1, 2].map((_, i) => (
            <S.TicketWrapper key={i} onPress={() => router.push('/(common)/popUpEntry')}>
              <S.LeftCard>
                <S.TickTitle>POPI TICKET</S.TickTitle>
              </S.LeftCard>
              <S.RightCard>
                <S.Barcode source={require('@/assets/images/my/qr.webp')} />
              </S.RightCard>

              <S.TicketInfoWrapper>
                <View
                  style={{
                    marginLeft: 20,
                    maxWidth: leftWidth,
                    paddingRight: 10,
                  }}
                >
                  <S.TicketPopupTitle numberOfLines={1} ellipsizeMode="tail">
                    {data[0].popupName}
                  </S.TicketPopupTitle>

                  <S.TicketPopupInfo>
                    <Image
                      source={require('@/assets/images/common/location-gray.webp')}
                      style={{
                        width: 14,
                        height: 14,
                        flexShrink: 0,
                      }}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        fontFamily: 'Pretendard-Semibold',
                        fontSize: 13,
                        color: '#929292',
                        flex: 1,
                        marginLeft: 3,
                      }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {data[0].address}
                    </Text>
                  </S.TicketPopupInfo>

                  <S.TicketPopupInfo>
                    <Image
                      source={require('@/assets/images/common/clock-gray.webp')}
                      style={{
                        width: 13,
                        height: 13,
                        flexShrink: 0,
                      }}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        fontFamily: 'Pretendard-Semibold',
                        fontSize: 13,
                        color: '#929292',
                        flex: 1,
                        marginLeft: 3,
                      }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {data[0].reservationDate} {data[0].reservationDay} {data[0].reservationTime}
                    </Text>
                  </S.TicketPopupInfo>
                </View>
              </S.TicketInfoWrapper>
              <S.Separator />
            </S.TicketWrapper>
          ))}

          <S.BottomActions>
            <S.BottomButton onPress={handleDeleteProfile}>탈퇴</S.BottomButton>
            <S.BottomButton onPress={handleLogout}>로그아웃</S.BottomButton>
          </S.BottomActions>
        </S.PopUpEntryScreenContainer>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image source={Images.icon} style={{ width: 480, height: 418 }} resizeMode="contain" />
          <View style={{ width: 140, height: 50, marginTop: 30 }}>
            <CustomGradientBtn title="로그인" onPress={() => router.push('/(common)/login')} />
          </View>
        </View>
      )}
    </S.StyleContainer>
  );
}
