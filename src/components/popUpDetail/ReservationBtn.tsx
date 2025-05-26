import { Dimensions, View } from 'react-native';
import CustomGradientBtn from '../customGradientBtn/CustomGradientBtn';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';

LocaleConfig.locales.kr = {
  monthNames: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

const { height } = Dimensions.get('window');

export default function ReservationBtn() {
  const calenderBottomSheetRef = useRef<BottomSheet>(null);
  const snapShotPoint = useMemo(() => [height * 0.4], []);

  const [selected, setSelected] = useState<string>('');

  const onDayPress = (day: DateData) => {
    setSelected(day.dateString);
  };

  const handleCalendarPress = useCallback((index: number) => {
    calenderBottomSheetRef.current?.snapToIndex(index);
  }, []);

  // const closeCalendarSheet = useCallback(() => {
  //   calenderBottomSheetRef.current?.close();
  // }, []);

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

  return (
    <View style={{ marginHorizontal: 12, flex: 1 }}>
      <CustomGradientBtn
        title="팝업 예약하기"
        height={54}
        onPress={() => handleCalendarPress(0)}
        icon={require('@/assets/images/common/store-gray.webp')}
      />
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
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: '101%',
          transform: [{ translateX: '-0.5%' }],
        }}
        handleIndicatorStyle={{ backgroundColor: '#555555', width: 60 }}
      >
        <Calendar
          onDayPress={onDayPress}
          markingType={'custom'}
          minDate="2025-05-26"
          maxDate="2025-06-10"
          monthFormat={'yyyy년 MM월'}
          theme={{
            weekVerticalMargin: 10,
            arrowColor: 'white',

            backgroundColor: '#1B1B1C',
            calendarBackground: '#1B1B1C',
            todayBackgroundColor: '#1B1B1C',
            todayTextColor: '#BFEFF4',

            monthTextColor: '#BCBCBE',
            textMonthFontFamily: 'pretendard',

            dayTextColor: '#BCBCBE',
            textDayFontFamily: 'pretendard',
            textDayHeaderFontFamily: 'pretendard',
          }}
          markedDates={{
            [selected]: {
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
          }}
        />
      </BottomSheet>
    </View>
  );
}
