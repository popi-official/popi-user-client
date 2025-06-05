import { getThemeColor, getThemePretendardFont } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const S = {
  StyleContainer: styled.View`
    background-color: ${getThemeColor('gray11')};
    flex: 1;
  `,

  // screen
  PopUpEntryScreenContainer: styled.ScrollView`
    background-color: ${getThemeColor('gray11')};
    padding: 12px;
  `,

  // 인사 문구
  Greeting: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 23px;
    color: ${getThemeColor('gray01')};
  `,

  // 캐릭터 이미지
  Character: styled.Image`
    width: 256px;
    height: 191px;
    align-self: center;
    margin-bottom: 8px;
  `,

  // 내 예약
  ReservationTitle: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 24px;
    color: ${getThemeColor('gray01')};
    margin-bottom: 10px;
  `,

  /*-------- 예약티켓  -------*/
  // 티켓 래퍼
  TicketWrapper: styled.TouchableOpacity`
    flex-direction: row;
    align-self: center;
    width: ${Dimensions.get('window').width - 24}px;
    aspect-ratio: 3.6/1.5;
    margin-bottom: 26px;
  `,

  // 점선
  Separator: styled.View`
    position: absolute;
    top: 23px;
    bottom: 23px;
    left: 68.5%;
    border-left-width: 2px;
    border-style: dashed;
    border-color: ${getThemeColor('gray04')};
  `,

  TicketTitle: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 13px;
    color: ${getThemeColor('gray01')};
    position: absolute;
    top: 4px;
    left: 12px;
  `,

  // 왼쪽 카드
  LeftCard: styled(LinearGradient).attrs({
    colors: ['#B0CFFF', '#EDF9FF', '#EEFAFF'],
    locations: [0, 0.42, 0.77],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1.2 },
  })`
    height: 100%;
    aspect-ratio: 2.5/1.5;
    border-radius: 20px;
    padding: 12px;
  `,

  // 오른쪽 카드
  RightCard: styled(LinearGradient).attrs({
    colors: ['#EDF9FF', '#EEFAFF', '#B0CFFF'],
    locations: [0, 0.42, 0.77],
    start: { x: 0, y: 0 },
    end: { x: 1.2, y: 1 },
  })`
    position: absolute;
    right: 0;
    height: 100%;
    aspect-ratio: 1.16/1.5;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
  `,

  // 바코드 이미지
  Barcode: styled.Image`
    width: 44px;
    height: 44px;
    z-index: 10;
  `,

  /* 티켓 상단 정보 박스 */
  TicketInfoWrapper: styled.View`
    position: absolute;
    width: 100%;
    top: 25px;
    bottom: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
  `,

  /* TODAY */
  TodayTag: styled.View`
    width: 56px;
    background-color: #907bf9;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-top: 8px;
  `,

  TodayText: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 12px;
    color: ${getThemeColor('gray01')};
  `,

  /* 박스 내부 공연 제목 */
  TicketPopupTitle: styled.Text<{ hasTodayTag: boolean }>`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 20px;
    color: ${getThemeColor('gray10')};
    margin-top: ${(props: { hasTodayTag: boolean }) => (props.hasTodayTag ? '3px' : '19px')};
    margin-bottom: 4px;
    flex-shrink: 1;
  `,

  /* 박스 내부 공연 정보(날짜/시간 등) */
  TicketPopupInfo: styled.View`
    gap: 3px;
    flex-direction: row;
    align-items: center;
  `,

  /*--------하단 -------*/
  // 하단 버튼 래퍼
  BottomActions: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px; /* 양쪽 패딩은 스크롤 컨테이너에서 이미 주므로 취향에 맞게 조절 */
    margin-bottom: 130px;
    padding: 0 123px;
  `,

  // '탈퇴' / '로그아웃' 텍스트
  BottomButton: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 14px;
    color: ${getThemeColor('gray05')};
  `,

  TabContainer: styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: ${getThemeColor('gray06')};
  `,

  Tab: styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    padding-bottom: 10px;
  `,

  TabText: styled.Text<{ isActive: boolean }>`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 18px;
    color: ${(props: { isActive: boolean }) =>
      props.isActive ? getThemeColor('gray01') : getThemeColor('gray04')};
  `,

  TabIndicator: styled.View`
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 3px;
    background-color: #c0d9ff;
  `,

  PaymentDateText: styled.Text`
    font-size: 15px;
    font-family: ${getThemePretendardFont('medium')};
    color: ${getThemeColor('gray01')};
    margin: 0px 0 7px 0;
  `,

  PaymentDivider: styled.View`
    height: 2px;
    background-color: ${getThemeColor('gray04')};
    margin-bottom: 10px;
  `,

  PopupNameBox: styled.View`
    background-color: ${getThemeColor('gray09')};
    padding: 8px 12px;
    border-radius: 10px;
    margin-bottom: 14px;
  `,

  PopupNameText: styled.Text`
    font-size: 16px;
    font-family: ${getThemePretendardFont('semibold')};
    color: ${getThemeColor('gray01')};
  `,

  PurchasedItem: styled.View`
    flex-direction: column;
    margin-bottom: 13px;
  `,

  ItemTitle: styled.Text`
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 20px;
    color: ${getThemeColor('gray01')};
    margin-bottom: 6px;
    margin-left: 6px;
  `,

  ItemDetail: styled.Text`
    font-family: ${getThemePretendardFont('medium')};
    font-size: 13px;
    color: ${getThemeColor('gray01')};
    text-align: right;
  `,

  ItemDivider: styled.View`
    height: 1px;
    background-color: ${getThemeColor('gray07')};
    margin-top: 12px;
  `,
};
