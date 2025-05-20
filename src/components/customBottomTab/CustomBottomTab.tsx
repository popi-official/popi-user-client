import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { S } from './CustomBottomTab.style';

const tabIcons = {
  home: require('@/assets/images/bottomTab/Home.png'),
  map: require('@/assets/images/bottomTab/Map.png'),
  cart: require('@/assets/images/bottomTab/Cart.png'),
  my: require('@/assets/images/bottomTab/My.png'),
};

export default function CustomBottomTab({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <S.CustomBottomTabContainer>
      {state.routes.map((tab, idx) => {
        const { options } = descriptors[tab.key];
        const title = options.title !== undefined ? options.title : tab.name;

        const isFocused = state.index === idx;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: tab.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        const imageSource = tabIcons[tab.name.toLowerCase() as keyof typeof tabIcons];

        return (
          <S.TabItemContainer key={tab.name} onPress={onPress}>
            <Image
              source={imageSource}
              style={[
                { width: 32, height: 32 },
                isFocused ? { tintColor: 'white' } : { tintColor: '#BCBCBE' },
              ]}
            />
            <S.Label isFocused={isFocused}>{title}</S.Label>
          </S.TabItemContainer>
        );
      })}
    </S.CustomBottomTabContainer>
  );
}
