import { Dimensions, Image, Text, View } from 'react-native';
import { S } from './Style.style';
import { useOAuth } from '@/hooks/useOAuth';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'expo-router';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { useGetReservationsApi } from '@/hooks/api/useReserviationApi';
import { useState } from 'react';
import { useGetMyPaymentsApi } from '@/hooks/api/usePaymantApi';

const { width } = Dimensions.get('window');

const Images = {
  icon: require('@/assets/images/my/my-character.webp'),
  qrImage: require('@/assets/images/my/qr.webp'),
  locationGray: require('@/assets/images/common/location-gray.webp'),
  clockGray: require('@/assets/images/common/clock-gray.webp'),
};

export default function MyScreen() {
  const { handleLogout, handleDeleteProfile } = useOAuth();
  const { isLogin } = useAuthStore();
  const router = useRouter();
  const leftWidth = width * 0.55;
  const { myReservationData } = useGetReservationsApi();
  const [activeTab, setActiveTab] = useState<'reservation' | 'payment'>('reservation');
  const { data: paymentList } = useGetMyPaymentsApi();

  const filteredPaymentList = paymentList?.pages.flatMap(item => item.data.content);

  const isTodayReservation = (dateStr: string) => {
    const today = new Date();
    const target = new Date(dateStr);
    return (
      today.getFullYear() === target.getFullYear() &&
      today.getMonth() === target.getMonth() &&
      today.getDate() === target.getDate()
    );
  };

  return (
    <S.StyleContainer>
      {isLogin ? (
        <S.PopUpEntryScreenContainer>
          <S.Greeting>몽몽님, 반가워요{`\n`}오늘은 어떤 팝업을 만나볼까요?</S.Greeting>

          <S.Character source={Images.icon} />

          <S.TabContainer>
            <S.Tab onPress={() => setActiveTab('reservation')}>
              <S.TabText isActive={activeTab === 'reservation'}>내 예약</S.TabText>
              {activeTab === 'reservation' && <S.TabIndicator />}
            </S.Tab>
            <S.Tab onPress={() => setActiveTab('payment')}>
              <S.TabText isActive={activeTab === 'payment'}>결제 내역</S.TabText>
              {activeTab === 'payment' && <S.TabIndicator />}
            </S.Tab>
          </S.TabContainer>

          {activeTab === 'reservation' ? (
            myReservationData?.map(reservation => {
              const isToday = isTodayReservation(reservation.reservationDate);

              return (
                <S.TicketWrapper
                  key={reservation.reservationId}
                  onPress={() =>
                    router.push({
                      pathname: '/(common)/popUpEntry',
                      params: {
                        source: 'my',
                        data: JSON.stringify(reservation),
                      },
                    })
                  }
                >
                  <S.LeftCard>
                    <S.TicketTitle>POPI TICKET</S.TicketTitle>
                  </S.LeftCard>
                  <S.RightCard>
                    <S.Barcode source={Images.qrImage} />
                  </S.RightCard>

                  <S.TicketInfoWrapper>
                    <View
                      style={{
                        marginLeft: 20,
                        maxWidth: leftWidth,
                        paddingRight: 10,
                      }}
                    >
                      {isToday && (
                        <S.TodayTag>
                          <S.TodayText>TODAY</S.TodayText>
                        </S.TodayTag>
                      )}
                      <S.TicketPopupTitle
                        hasTodayTag={isToday}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {reservation.popupName}
                      </S.TicketPopupTitle>

                      <S.TicketPopupInfo>
                        <Image
                          source={Images.locationGray}
                          style={{
                            width: 16,
                            height: 16,
                            flexShrink: 0,
                            marginLeft: -1,
                          }}
                          resizeMode="cover"
                        />
                        <Text
                          style={{
                            fontFamily: 'Pretendard-Semibold',
                            fontSize: 13,
                            color: '#929292',
                            flex: 1,
                            marginLeft: 0,
                          }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {reservation.address}
                        </Text>
                      </S.TicketPopupInfo>

                      <S.TicketPopupInfo>
                        <Image
                          source={Images.clockGray}
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
                          {reservation.reservationDate} {reservation.reservationDay}{' '}
                          {reservation.reservationTime}
                        </Text>
                      </S.TicketPopupInfo>
                    </View>
                  </S.TicketInfoWrapper>
                  <S.Separator />
                </S.TicketWrapper>
              );
            })
          ) : (
            <View style={{ paddingHorizontal: 20 }}>
              {filteredPaymentList?.map(({ paymentId, popupId, paidAt, items }) => (
                <View key={paymentId}>
                  <S.PaymentDateText>{new Date(paidAt).toLocaleDateString()}</S.PaymentDateText>

                  <S.PaymentDivider />
                  <S.PopupNameBox>
                    <S.PopupNameText numberOfLines={1} ellipsizeMode="tail">
                      팝업스토어 #{popupId}
                    </S.PopupNameText>
                  </S.PopupNameBox>

                  {items.map((item, index) => (
                    <S.PurchasedItem key={index}>
                      <View style={{ flex: 1 }}>
                        <S.ItemTitle numberOfLines={1} ellipsizeMode="tail">
                          {item.itemName}
                        </S.ItemTitle>
                        <S.ItemDetail>
                          수량 : {item.quantity}개{'\n'}
                          {item.price.toLocaleString()}원
                        </S.ItemDetail>
                        {index !== items.length - 1 && <S.ItemDivider />}
                      </View>
                    </S.PurchasedItem>
                  ))}
                </View>
              ))}
            </View>
          )}

          <S.BottomActions>
            <S.BottomButton onPress={handleDeleteProfile}>탈퇴</S.BottomButton>
            <S.BottomButton onPress={handleLogout}>로그아웃</S.BottomButton>
          </S.BottomActions>
        </S.PopUpEntryScreenContainer>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image source={Images.icon} style={{ width: 256, height: 191 }} resizeMode="contain" />
          <View style={{ width: 140, height: 50, marginTop: 130 }}>
            <CustomGradientBtn title="로그인" onPress={() => router.push('/(common)/login')} />
          </View>
        </View>
      )}
    </S.StyleContainer>
  );
}
