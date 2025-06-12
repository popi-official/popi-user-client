import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  hitSlop?: number;
  pressedOpacity?: number;
  disabled?: boolean;
  android_ripple?: {
    color?: string;
    radius?: number;
    borderless?: boolean;
  };
};

const CustomPressableBtn = ({
  onPress,
  style,
  children,
  hitSlop = 10,
  pressedOpacity = 0.7,
  disabled = false,
  android_ripple,
}: Props) => {
  return (
    <Pressable
      hitSlop={hitSlop}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      android_ripple={android_ripple}
      style={({ pressed }) => [
        {
          opacity: disabled ? 0.5 : pressed ? pressedOpacity : 1,
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default CustomPressableBtn;
