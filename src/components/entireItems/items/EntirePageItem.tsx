import { PopUpDetailItem } from '@/types/DetailScreenType';
import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';

type Props = {
  item: PopUpDetailItem;
};

const screenWidth = Dimensions.get('window').width;

const EntirePageItem = ({ item }: Props) => {
  if (!item) {
    return null;
  }
  const itemWidth = (screenWidth - 36) / 2;

  return (
    <View
      style={{
        flex: 1,
        width: itemWidth,
      }}
    >
      <Image
        source={{ uri: item.imagePath }}
        style={{
          width: '100%',
          height: itemWidth,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
      <Text numberOfLines={2} ellipsizeMode="tail" style={{ marginTop: 10, color: 'white' }}>
        {item.title}
      </Text>
      <Text style={{ marginTop: 8, fontWeight: 'bold', textAlign: 'right', color: 'white' }}>
        {item.price}
      </Text>
    </View>
  );
};

export default React.memo(EntirePageItem);
