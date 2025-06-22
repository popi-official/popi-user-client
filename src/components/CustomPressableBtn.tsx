import { ReactNode } from 'react';
import { Pressable } from 'react-native-gesture-handler';

type Props = {
  children: ReactNode;
  onPress: () => void;
};

export default function CustomPressableBtn({ children, onPress }: Props) {
  return (
    <Pressable
      hitSlop={10}
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      {children}
    </Pressable>
  );
}
