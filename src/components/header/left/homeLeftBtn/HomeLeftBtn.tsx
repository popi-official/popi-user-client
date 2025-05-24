import { Image } from 'react-native';

const images = {
  icon: require('@/assets/images/adaptive-icon.png'),
};

export default function HomeLeftBtn() {
  return (
    <Image
      source={images.icon}
      style={{ width: 100, height: 40, transform: [{ translateX: -4 }] }}
      resizeMode="contain"
    />
  );
}
