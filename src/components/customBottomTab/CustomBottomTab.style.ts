import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

interface TabItemContainerProps {
  isFocused: boolean;
}

interface LabelProps {
  isFocused: boolean;
}

interface BottomTabInset {
  insetBottom: number;
}

export const S = {
  CustomBottomTabContainer: styled.View<BottomTabInset>`
    position: absolute;
    bottom: 0;
    left: -0.5%;
    right: 0;
    width: 101%;
    align-items: center;
    flex-direction: row;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-left: 41px;
    padding-right: 41px;
    padding-top: 14px;
    padding-bottom: ${({ insetBottom }: BottomTabInset) => insetBottom};
    overflow: hidden;
    background-color: ${getThemeColor('gray10')};
    gap: 60px;
    border-width: 1px;
    border-bottom-width: 0px;
    border-color: ${getThemeColor('gray05')};
  `,
  TabItemContainer: styled.TouchableOpacity<TabItemContainerProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Label: styled.Text<LabelProps>`
    font-size: 9px;
    font-family: ${getThemePretendardFont('semibold')};
    color: ${(props: TabItemContainerProps) =>
      props.isFocused ? getThemeColor('gray01') : getThemeColor('gray04')};
  `,
};
