import { Image, TouchableOpacity } from 'react-native';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { S } from './PopUpDetail.style';
import { PopUpDetailMock } from '@/mocks/PopUpDetailMocks';
import { useRouter } from 'expo-router';
import { ParseJsonToString } from '@/utils/JsonParser';
import HotItems from '@/components/entireItems/hotItems/HotItems';
import { HotItemMocks, ItemMocks } from '@/mocks/PopUpDetailItemMocks';
import { ItemPathType, TimeSlot } from '@/types/DetailScreen';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Direction } from 'react-native-calendars/src/types';
import { ReservationInfoMock } from '@/mocks/ReservationMocks';
import { useAuthStore } from '@/store/useAuthStore';
import { usePopUpStore } from '@/store/usePopUpStore';
import { useGetReservationInfoApi } from '@/hooks/api/useReserviationApi';

const Images = {
  rightArrow: require('@/assets/images/common/right-arrow.webp'),
};

const CALENDAR_THEME = {
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
    },
    monthText: {
      fontSize: 16,
      fontWeight: 600,
      color: '#FFFFFF',
      fontFamily: 'pretendard',
    },
    week: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#1B1B1C',
    },
    weekText: {
      fontSize: 20,
      fontWeight: 600,
      color: '#BCBCBE',
    },
    dayHeader: {
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      color: '#BCBCBE',
    },
  },
  'stylesheet.day.basic': {
    base: {
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginTop: 4,
      fontSize: 16,
      fontFamily: 'pretendard',
      fontWeight: '700',
      color: 'white',
      backgroundColor: 'transparent',
    },
    disabledText: {
      color: '#929292',
      fontWeight: '400',
    },
    inactiveText: {
      color: '#222222',
      opacity: 0.3,
    },
  },
  weekVerticalMargin: 10,
  backgroundColor: '#1B1B1C',
  calendarBackground: '#1B1B1C',
  todayTextColor: '#BFEFF4',
  monthTextColor: '#BCBCBE',
  textMonthFontFamily: 'pretendard',
  dayTextColor: 'white',
  textDisabledColor: '#929292',
  textDayFontWeight: '400',
} as any;

export default function PopUpDetailScreen() {
  const router = useRouter();
  const inset = useSafeAreaInsets();
  const calenderBottomSheetRef = useRef<BottomSheet>(null);
  const snapShotPoint = useMemo(() => ['35%'], []);

  // 사용자가 선택한 날짜입니다 -> 하단에 예약 가능한 시간을 보여주기 위해 사용합니다.
  const [selectedDate, setSelectedDate] = useState<string>('');
  // 사용자가 선택한 날짜에 맞는 예약가능한 시간대입니다. timeSlots를 이용해서 예약가능한 버튼을 만듭니다.
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  // 사용자가 선택한 ReservationId입니다. 실제로 예약하기 버튼을 누르면, 보낼 데이터입니다.
  const [selectedId, setSelectedId] = useState<number>(0);

  // 캘린더에서 예약 가능 날짜를 보여주기 위해 사용합니다.
  // API 명세에서 YYYY-MM을 요청하기 때문에, 캘린더의 Month가 변경되면 이 부분이 추출되어 상태로 저장됩니다.
  const [currentYearMonth, setCurrentYearMonth] = useState('2025-05');

  // 예약 가능 날짜를 조회하는 API입니다.
  // 위에서 정의한 currentYearMonth가 수정될때마다 같이 호출되어 캘린더 데이터를 채웁니다.
  const { reservationInfo = ReservationInfoMock } = useGetReservationInfoApi({
    popupId: usePopUpStore.getState().selectedPopUpId,
    yyyyMM: currentYearMonth,
  });
  const reservableDate = reservationInfo.reservableDate;

  // TODO: 팝업 상세 페이지 조회 API로 변경할 예정입니다.
  const data = PopUpDetailMock;

  const handleCalendarPress = useCallback((index: number) => {
    calenderBottomSheetRef.current?.snapToIndex(index);
  }, []);

  // 캘린더에서 날짜를 선택하면 예약 가능한 시간대를 추출하여 상태로 저장합니다.
  const parseTimeSlotFromDate = useCallback(
    (date: string) => {
      setTimeSlots(reservableDate.filter(d => d.date === date)[0].timeSlots);
    },
    [reservableDate],
  );

  // 캘린더에서 날짜가 변경되면 yyyy-MM을 추출하여 저장하는 함수입니다.
  const handleMonthChange = useCallback(
    (month: any) => {
      const yyyyMM = month.dateString.slice(0, 7);
      setCurrentYearMonth(yyyyMM);

      if (selectedDate) {
        parseTimeSlotFromDate(selectedDate);
      }
    },
    [selectedDate, parseTimeSlotFromDate],
  );

  // 사용자가 캘린더에서 날짜를 클릭했을 때 실행되는 함수를 정의합니다.
  // 타임 슬롯을 추출하여 예약 가능한 시간대를 보여줘야합니다.
  const onDayPress = useCallback(
    (day: DateData) => {
      setSelectedDate(day.dateString);
      parseTimeSlotFromDate(day.dateString);
    },
    [parseTimeSlotFromDate],
  );

  // 캘린더에서 사용되는 커스텀 Arrow 버튼입니다.
  const renderArrow = useCallback((direction: Direction) => {
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
  }, []);

  // BottomSheet에서 제공해주는 기능으로, 바텀시트 외부를 클릭하면 바텀시트가 사라집니다.
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    [],
  );

  // 예약 시간을 클릭하면 reservationId를 저장합니다.
  const handleTimeSlotPress = useCallback((reservationId: number) => {
    setSelectedId(reservationId);
  }, []);

  // TODO: 예약하기 버튼을 눌렀을 때 실행할 예약 API를 구현해야합니다.
  const handleReservation = useCallback(() => {}, []);

  // 전체 상품을 보는 버튼을 클릭했을 때, 인기있는 상품 데이터를 넘겨줍니다.
  // TODO : 어차피 중복되는 데이터라 그냥 API Call을 줄이려고 만들어놨는데, 코드가 너무 번잡해서 그냥 없애는것도 괜찮을 것 같습니다.
  const navigateToEntireItems = useCallback(() => {
    router.push({
      pathname: '/(common)/popUpDetail/entireItems',
      params: {
        hotItems: ParseJsonToString(ItemMocks),
        title: data.popupName,
      },
    });
  }, [router, data.popupName]);

  // 바텀시트 캘린더 하단에 나타나는 예약가능한 시간대 영역입니다.
  const renderTimeSlot = useCallback(
    (item: TimeSlot) => {
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
    },
    [selectedId, handleTimeSlotPress],
  );

  const renderHotItem = useCallback(
    (item: any, index: number) => <HotItems key={index} item={item} index={index} />,
    [],
  );

  const renderItem = useCallback(
    (item: ItemPathType, idx: number) => (
      <S.ItemCard key={idx}>
        <S.ItemImage source={{ uri: item.imagePath }} />
        <S.ItemTitle numberOfLines={1}>{item.title}</S.ItemTitle>
        <S.ItemPrice>{item.price}</S.ItemPrice>
      </S.ItemCard>
    ),
    [],
  );

  const markedDates = useMemo(
    () => ({
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
    }),
    [selectedDate],
  );

  return (
    <S.Container inset={inset}>
      <S.Banner source={require('@/assets/images/common/popupimg.png')} />

      <S.PopUpContentBox>
        <S.PopupTitle>{data.popupName}</S.PopupTitle>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/location-gray.webp')} />
          <S.PopupInfo>{`${data.popupOpenDate} - ${data.popupCloseDate}`}</S.PopupInfo>
        </S.SubInfoRow>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/calendar-gray.webp')} />
          <S.PopupInfo>{data.address}</S.PopupInfo>
        </S.SubInfoRow>
      </S.PopUpContentBox>

      <S.Divider />

      <S.PopUpContentBox>
        <S.SectionTitle style={{ marginBottom: 8 }}>운영시간</S.SectionTitle>
        <S.SubInfoRow>
          <S.Icon source={require('@/assets/images/common/clock-gray.webp')} />
          <S.PopupInfo>{`${data.runOpenTime.slice(0, 5)} - ${data.runCloseTime.slice(0, 5)}`}</S.PopupInfo>
        </S.SubInfoRow>

        <S.SectionTitle style={{ marginTop: 20, marginBottom: 12 }}>위치정보</S.SectionTitle>
        <S.MapImage source={{ uri: data.imageUrl }} />
      </S.PopUpContentBox>

      <S.DividerWide />

      <S.ItemContentBox>
        <S.ItemCategory style={{ marginTop: 40, marginBottom: 20 }}>WHAT`S HOT</S.ItemCategory>
        <S.ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {HotItemMocks.map(renderHotItem)}
        </S.ScrollView>
      </S.ItemContentBox>

      <S.ItemContentBox>
        <S.RowBetween>
          <S.ItemCategoryAll>전체 상품</S.ItemCategoryAll>
          <TouchableOpacity onPress={navigateToEntireItems}>
            <S.RightArrow source={require('@/assets/images/common/right-arrow.webp')} />
          </TouchableOpacity>
        </S.RowBetween>
        <S.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 24 }}
          style={{ marginBottom: 12 }}
        >
          {ItemMocks.slice(0, 4).map(renderItem)}
        </S.ScrollView>

        <CustomGradientBtn
          title="팝업 예약하기"
          height={54}
          onPress={() => handleCalendarPress(0)}
          icon={require('@/assets/images/common/store-gray.webp')}
        />
      </S.ItemContentBox>

      <BottomSheet
        ref={calenderBottomSheetRef}
        snapPoints={snapShotPoint}
        enableDynamicSizing={false}
        enablePanDownToClose={true}
        index={-1}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: '#1B1B1C',
          borderBottomWidth: 0,
        }}
        handleStyle={{
          backgroundColor: '#1B1B1C',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderColor: '#D9D9D9',
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}
        containerStyle={{
          width: '101%',
          transform: [{ translateX: '-0.5%' }],
        }}
        handleIndicatorStyle={{ backgroundColor: '#555555', width: 60 }}
      >
        <S.CalendarSection>
          <S.CalendarContainer>
            <Calendar
              onDayPress={onDayPress}
              markingType={'custom'}
              minDate={reservationInfo.reservableDate[0].date}
              maxDate={
                reservationInfo.reservableDate[reservationInfo.reservableDate.length - 1].date
              }
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
          <CustomGradientBtn title="예약하기" onPress={handleReservation} disabled={!selectedId} />
        </S.ReservationButtonContainer>
      </BottomSheet>
    </S.Container>
  );
}
