import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperExample = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true} loop={true} autoplay={true}>
      <View style={[styles.slide, { backgroundColor: '#9DD6EB' }]}>
        <Text style={styles.text}>슬라이드 1</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: '#97CAE5' }]}>
        <Text style={styles.text}>슬라이드 2</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: '#92BBD9' }]}>
        <Text style={styles.text}>슬라이드 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SwiperExample;
