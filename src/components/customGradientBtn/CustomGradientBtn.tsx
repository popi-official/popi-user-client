import React, { useMemo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { S } from './CustomGradientBtn.style';
import { Theme } from '@/theme/Theme';
import styled from 'styled-components/native';
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

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;
