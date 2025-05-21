import { getThemeColor, getThemeFont, getThemeFontWeight } from '@/types';
import { Animated, Dimensions, Image } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

interface SelectedOption {
  isSelected: boolean;
}

const { width, height } = Dimensions.get('window');

export const S = {
  SignUpScreenContainer: styled.View`
    flex: 1;
    position: relative;
  `,
  BackgroundImageContainer: styled.View`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
  `,
  BackgroundImage: styled(Image)`
    width: 100%;
    height: 100%;
  `,
  ContentWrapper: styled.View`
    flex: 1;
    padding-top: 110px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
  `,
  FormContent: styled.View`
    flex: 1;
  `,
  ButtonContainer: styled.View`
    width: 100%;
    align-items: center;
  `,
  TitleText: styled(Animated.Text)`
    font-style: ${getThemeFont('pretendard')};
    font-size: 26px;
    height: 64px;
    font-weight: ${getThemeFontWeight('semibold')};
    color: ${getThemeColor('gray02')};
  `,

  InputSection: styled.View`
    gap: 6px;
    margin-top: 40px;
  `,
  InputLabel: styled.Text`
    color: white;
  `,
  InputTouchable: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    padding-bottom: 10px;
    border-bottom-color: white;
  `,
  InputWrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    padding-bottom: 10px;
    border-bottom-color: white;
  `,
  StyledTextInput: styled.TextInput`
    color: white;
    font-size: 22px;
    font-weight: 600;
  `,
  ClearButton: styled.TouchableOpacity`
    z-index: 1;
    justify-content: center;
  `,
  ClearButtonText: styled.Text`
    color: white;
  `,
  SelectButton: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  `,
  SelectText: styled.Text<SelectedOption>`
    color: white;
    font-size: 22px;
    font-weight: 600;
  `,
  ArrowIcon: styled(Image)`
    width: 26px;
    height: 26px;
  `,

  BottomSheetContent: styled(BottomSheetView)`
    padding: 20px;
  `,
  BottomSheetHeader: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  `,
  BottomSheetTitle: styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
  `,
  CloseButton: styled.TouchableOpacity``,
  CloseIcon: styled(Image)`
    width: 15px;
    height: 15px;
    tint-color: white;
  `,
  CloseButtonText: styled.Text`
    color: white;
    font-size: 24px;
  `,
  OptionButton: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-vertical: 20px;
  `,
  OptionText: styled.Text<SelectedOption>`
    color: ${(props: SelectedOption) => (props.isSelected ? '#C3E4F5' : 'white')};
    font-size: 22px;
  `,
  CheckText: styled.Text`
    color: #c3e4f5;
    font-size: 20px;
  `,
};
