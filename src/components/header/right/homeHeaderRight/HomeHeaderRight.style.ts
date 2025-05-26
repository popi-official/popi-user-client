import { getThemeColor } from '@/types';
import styled from 'styled-components/native';

export const S = {
  HomeHeaderContainer: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
  `,

  HeaderButton: styled.TouchableOpacity``,

  TicketIcon: styled.Image`
    width: 26px;
    height: 26px;
    tint-color: ${getThemeColor('gray01')};
  `,

  SearchIcon: styled.Image`
    width: 26px;
    height: 26px;
    tint-color: ${getThemeColor('gray01')};
  `,
};
