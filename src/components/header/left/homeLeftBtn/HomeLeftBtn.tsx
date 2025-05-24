import { Image } from 'react-native';

const images = {
  icon: require('@/assets/images/adaptive-icon.png'),
};

export default function HomeLeftBtn() {
  return (
    <Image
      source={images.icon}
      style={{ width: 80, height: 25, transform: [{ translateX: -4 }] }}
      resizeMode="contain"
    />
  );
}
