import { S } from './Style.style';

import { myReservationsMock } from '@/mocks/MyPageMocks';

export default function MyScreen() {
  const data = myReservationsMock;

  return (
    <S.StyleContainer>
      <S.PopUpEntryScreenContainer>
        <S.Title>MY POPI</S.Title>

        <S.Greeting>
          몽몽님, 오늘이 <S.Highlight>예약일</S.Highlight>이에요!
        </S.Greeting>

        <S.Character source={require('@/assets/images/my/my-character.webp')} />

        <S.ReservationTitle>내 예약</S.ReservationTitle>

        {[1, 2].map((_, i) => (
          <S.TicketWrapper key={i}>
            <S.LeftCard>
              <S.TickTitle>POPI TICKET</S.TickTitle>
            </S.LeftCard>
            <S.RightCard>
              <S.Barcode source={require('@/assets/images/my/qr.webp')} />
            </S.RightCard>

            <S.TicketInfoWrapper>
              <S.TicketPopupTitle>{data[0].popupName}</S.TicketPopupTitle>

              <S.TicketPopupInfo>
                <S.Icon source={require('@/assets/images/common/location-gray.webp')} />
                {data[0].address}
              </S.TicketPopupInfo>

              <S.TicketPopupInfo>
                <S.Icon source={require('@/assets/images/common/clock-gray.webp')} />
                {data[0].reservationDate} {data[0].reservationDay} {data[0].reservationTime}
              </S.TicketPopupInfo>
            </S.TicketInfoWrapper>
            <S.Separator />
          </S.TicketWrapper>
        ))}

        <S.BottomActions>
          <S.BottomButton>탈퇴</S.BottomButton>
          <S.BottomButton>로그아웃</S.BottomButton>
        </S.BottomActions>
      </S.PopUpEntryScreenContainer>
    </S.StyleContainer>
  );
}
