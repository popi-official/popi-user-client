import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { S } from './PopUpDetail.style';
import { useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PopUpDetailInfo from '@/components/popUpDetail/PopUpDetailInfo';
import CustomCalendar from '@/components/popUpDetail/Calendar';

export default function PopUpDetailScreen() {
  const inset = useSafeAreaInsets();
  const calenderBottomSheetRef = useRef<BottomSheet>(null);
  const snapShotPoint = useMemo(() => ['35%'], []);

  const handleCalendarPress = (index: number) => {
    calenderBottomSheetRef.current?.snapToIndex(index);
  };

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
      pressBehavior="close"
    />
  );

  return (
    <S.Container inset={inset}>
      <PopUpDetailInfo />
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
          width: '101%',
          transform: [{ translateX: '-0.5%' }],
        }}
        handleIndicatorStyle={{ backgroundColor: '#555555', width: 60 }}
      >
        <CustomCalendar />
      </BottomSheet>
    </S.Container>
  );
}
