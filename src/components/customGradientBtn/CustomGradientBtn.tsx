import React, { useMemo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { S } from './CustomGradientBtn.style';
import { Theme } from '@/theme/Theme';
import { ImageSourcePropType } from 'react-native';
import { GradientType } from '@/types/style';

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
  icon,
}: Props) {
  const gradient = useMemo<GradientType>(() => {
    if (disabled) {
      return {
        colors: ['#888888', '#AAAAAA'],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
      };
    }
    return Theme.gradients.button;
  }, [disabled]);
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
        <S.ButtonContent>
          {icon && <S.Icon source={icon} resizeMode="contain" />}
          <S.ButtonText style={textStyle} fontSize={fontSize} fontWeight={fontWeight}>
            {title}
          </S.ButtonText>
        </S.ButtonContent>
      </S.GradientBackground>
    </S.ButtonContainer>
  );
}
