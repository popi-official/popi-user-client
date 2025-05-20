import React, { useMemo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { S } from './CustomGradientBtn.style';
import { Theme } from '@/theme/Theme';

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
};

export default function CustomGradientBtn({
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
}: Props) {
  const gradient = useMemo(() => Theme.gradients.button, []);
  return (
    <S.ButtonContainer
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[{ width, height, borderRadius }, style]}
    >
      <S.GradientBackground
        colors={gradient.colors}
        start={gradient.start}
        end={gradient.end}
        style={{ borderRadius }}
      >
        <S.ButtonText style={textStyle} fontSize={fontSize} fontWeight={fontWeight}>
          {title}
        </S.ButtonText>
      </S.GradientBackground>
    </S.ButtonContainer>
  );
}
