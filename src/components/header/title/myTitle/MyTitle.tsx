import { Text, View } from 'react-native';

export default function MyTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Pretendard-Semibold',
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        MY
      </Text>
    </View>
  );
}
