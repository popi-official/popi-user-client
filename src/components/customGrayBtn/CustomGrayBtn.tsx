import React, { useMemo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { S } from './CustomGrayBtn.style';
import { Theme } from '@/theme/Theme';
import { ImageSourcePropType } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  width?: string | number;
  height?: string | number;
  gradientKey?: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  icon?: ImageSourcePropType;
  noPadding?: boolean;
};

export default function CustomGrayBtn({
  title,
  onPress,
  width = '100%',
  height,
  disabled = false,
  style,
  textStyle,
  borderRadius = 30,
  fontSize,
  fontWeight,
  noPadding = false,
}: Props) {
  const gradient = useMemo(() => Theme.gradients.button, []);
  return (
    <S.ButtonContainer
      onPress={onPress}
      disabled={disabled}
      style={[{ width, height, borderRadius }, style]}
      
    >
      <S.ButtonText style={textStyle} fontSize={fontSize} fontWeight={fontWeight}>
        {title}
      </S.ButtonText>
    </S.ButtonContainer>
  );
}
