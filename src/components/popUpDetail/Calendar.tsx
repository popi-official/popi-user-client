import { Calendar } from 'react-native-calendars';
import { S } from '../../../app/(common)/popUpDetail/PopUpDetail.style';
import { CALENDAR_THEME } from '@/constants/Options';
import { MarkedDates } from 'react-native-calendars/src/types';
import { TimeSlot } from '@/types/DetailScreen';
import { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useGetReservationInfoApi } from '@/hooks/api/useReserviationApi';
import { usePopUpStore } from '@/store/usePopUpStore';
import { useAuthStore } from '@/store/useAuthStore';

const Images = {
  rightArrow: require('@/assets/images/common/right-arrow.webp'),
};

export default function CustomCalendar() {
  const selectedPopUpId = usePopUpStore(state => state.selectedPopUpId);
  const isLogin = useAuthStore.getState().isLogin;

  // 사용자가 선택한 날짜입니다 -> 하단에 예약 가능한 시간을 보여주기 위해 사용합니다.
  const [selectedDate, setSelectedDate] = useState<string>('');
  // 사용자가 선택한 날짜에 맞는 예약가능한 시간대입니다. timeSlots를 이용해서 예약가능한 버튼을 만듭니다.
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  // 사용자가 선택한 ReservationId입니다. 실제로 예약하기 버튼을 누르면, 보낼 데이터입니다.
  const [selectedId, setSelectedId] = useState<number>(0);

  // 캘린더에서 예약 가능 날짜를 보여주기 위해 사용합니다.
  // API 명세에서 YYYY-MM을 요청하기 때문에, 캘린더의 Month가 변경되면 이 부분이 추출되어 상태로 저장됩니다.
  const [currentYearMonth, setCurrentYearMonth] = useState('2025-06');

  // 예약 가능 날짜를 조회하는 API입니다.
  // 위에서 정의한 currentYearMonth가 수정될때마다 같이 호출되어 캘린더 데이터를 채웁니다.
  const { reservationInfo, isLoading, isError } = useGetReservationInfoApi({
    popupId: 1,
    yyyyMM: currentYearMonth,
  });

  if (isLoading) {
    return (
      <S.Container inset={inset}>
        <ActivityIndicator size="large" color="white" />
      </S.Container>
    );
  }

  if (isError || !reservationInfo) {
    return (
      <S.Container inset={inset}>
        <Text style={{ color: 'white', textAlign: 'center' }}>예약 정보를 불러올 수 없습니다.</Text>
      </S.Container>
    );
  }

  const reservableDate = reservationInfo.reservableDate;

  const parseTimeSlotFromDate = (date: string) => {
    setTimeSlots(reservableDate.filter(d => d.date === date)[0].timeSlots);
  };

  const handleMonthChange = (month: any) => {
    const yyyyMM = month.dateString.slice(0, 7);
    setCurrentYearMonth(yyyyMM);

    if (selectedDate) {
      parseTimeSlotFromDate(selectedDate);
    }
  };

  // 사용자가 캘린더에서 날짜를 클릭했을 때 실행되는 함수를 정의합니다.
  // 타임 슬롯을 추출하여 예약 가능한 시간대를 보여줘야합니다.
  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    parseTimeSlotFromDate(day.dateString);
  };

  // 캘린더에서 사용되는 커스텀 Arrow 버튼입니다.
  const renderArrow = (direction: Direction) => {
    return (
      <Image
        source={Images.rightArrow}
        style={{
          width: 24,
          height: 24,
          transform: [{ rotate: direction === 'left' ? '180deg' : '0deg' }],
          marginHorizontal: 4,
          marginVertical: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="contain"
      />
    );
  };
  // 예약 시간을 클릭하면 reservationId를 저장합니다.
  const handleTimeSlotPress = (reservationId: number) => {
    setSelectedId(reservationId);
  };

  // TODO: 예약하기 버튼을 눌렀을 때 실행할 예약 API를 구현해야합니다.
  const handleReservation = () => {
    return undefined;
  };

  // 바텀시트 캘린더 하단에 나타나는 예약가능한 시간대 영역입니다.
  const renderTimeSlot = (item: TimeSlot) => {
    const isSelected = item.reservationId === selectedId;

    return (
      <S.TimeSlotButton
        onPress={() => handleTimeSlotPress(item.reservationId)}
        key={item.time}
        disabled={!item.isPossible}
      >
        <S.TimeSlotGradient
          colors={isSelected ? ['#BFF0F5', '#E0D9FF'] : ['transparent', 'transparent']}
          isSelected={isSelected}
          isPossible={item.isPossible}
        >
          <S.TimeSlotText isSelected={isSelected} isPossible={item.isPossible}>
            {Number(item.time.slice(0, 2)) < 12 ? 'AM' : 'PM'}{' '}
          </S.TimeSlotText>
          <S.TimeSlotText isSelected={isSelected} isPossible={item.isPossible}>
            {item.time}
          </S.TimeSlotText>
        </S.TimeSlotGradient>
      </S.TimeSlotButton>
    );
  };

  const markedDates: MarkedDates = selectedDate
    ? {
        [selectedDate]: {
          customStyles: {
            container: {
              backgroundColor: '#F9F9FA',
            },
            text: {
              color: 'black',
              fontFamily: 'pretendard-Semibold',
              fontSize: 16,
            },
          },
        },
      }
    : {};

  return (
    <>
      <S.CalendarSection>
        <S.CalendarContainer>
          <Calendar
            onDayPress={onDayPress}
            markingType={'custom'}
            minDate={reservationInfo.reservableDate[0].date}
            maxDate={reservationInfo.reservableDate[reservationInfo.reservableDate.length - 1].date}
            monthFormat={'yyyy년 MM월'}
            theme={CALENDAR_THEME}
            renderArrow={renderArrow}
            markedDates={markedDates}
            onMonthChange={handleMonthChange}
          />
        </S.CalendarContainer>
      </S.CalendarSection>

      <S.TimeSlotScrollView horizontal showsHorizontalScrollIndicator={false}>
        {timeSlots.map(renderTimeSlot)}
      </S.TimeSlotScrollView>

      <S.ReservationButtonContainer>
        <CustomGradientBtn
          title={isLogin ? '예약하기' : '로그인 후 이용해주세요'}
          onPress={handleReservation}
          disabled={!selectedId || !isLogin}
        />
      </S.ReservationButtonContainer>
    </>
  );
}
