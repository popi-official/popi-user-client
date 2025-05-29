import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { S } from './PopUpDetail.style';
import { useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PopUpDetailInfo from '@/components/popUpDetail/PopUpDetailInfo';
import CustomCalendar from '@/components/popUpDetail/CustomCalendar';
import { Image, View } from 'react-native';
import { useAuthStore } from '@/store/useAuthStore';
import { TouchableOpacity } from 'react-native';

const Images = {
  closeIcon: require('@/assets/images/signUp/close.png'),
};

export default function PopUpDetailScreen() {
  const inset = useSafeAreaInsets();
  const calenderBottomSheetRef = useRef<BottomSheet>(null);
  const snapShotPoint = useMemo(() => ['35%'], []);
  const isLogin = useAuthStore(state => state.isLogin);

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
      <View style={{ marginHorizontal: 12 }}>
        <CustomGradientBtn
          title={isLogin ? '팝업 예약하기' : '로그인 이후 이용해주세요'}
          height={54}
          onPress={() => handleCalendarPress(0)}
          icon={require('@/assets/images/common/store-gray.webp')}
          disabled={!isLogin}
        />
      </View>
      <BottomSheet
        ref={calenderBottomSheetRef}
        snapPoints={snapShotPoint}
        enableDynamicSizing={false}
        animateOnMount={false}
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
        <TouchableOpacity onPress={() => calenderBottomSheetRef.current?.close()}>
          <Image
            source={Images.closeIcon}
            style={{ width: 15, height: 15, alignSelf: 'flex-end', marginRight: 20 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <CustomCalendar />
      </BottomSheet>
    </S.Container>
  );
}
