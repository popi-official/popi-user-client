import { getThemeColor, getThemeFont, getThemeFontWeight } from '@/types';
import styled from 'styled-components/native';

interface TabItemContainerProps {
  isFocused: boolean;
}

interface LabelProps {
  isFocused: boolean;
}

export const S = {
  CustomBottomTabContainer: styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-left: 41px;
    padding-right: 41px;
    padding-top: 14px;
    overflow: hidden;
    background-color: ${getThemeColor('gray10')};
    gap: 60px;
    border-width: 1px;
    border-bottom-width: 0px;
    border-color: ${getThemeColor('gray09')};
  `,
  TabItemContainer: styled.TouchableOpacity<TabItemContainerProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Label: styled.Text<LabelProps>`
    font-size: 9px;
    font-weight: ${getThemeFontWeight('medium')};
    font-style: ${getThemeFont('pretendard')};
    color: ${(props: TabItemContainerProps) =>
      props.isFocused ? getThemeColor('gray01') : getThemeColor('gray07')};
  `,
};
