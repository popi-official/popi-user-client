import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import { S } from './MapScreen.style';
import { popUpMarkerItems } from '@/mocks/MapMocks';
// import * as Location from 'expo-location';
// import { useEffect, useState } from 'react';
// import { Alert } from 'react-native';

const Images = {
  marker: require('@/assets/images/common/marker.webp'),
};

const jejuRegion: Region = {
  latitude: 33.20530773,
  longitude: 126.14656715029,
  latitudeDelta: 0.38,
  longitudeDelta: 0.8,
};

const MapScreen = () => {
  // const [region, setRegion] = useState<Region | null>(null);

  // useEffect(() => {
  //   const getLocation = async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert('위치 권한 오류', '위치 권한이 필요합니다.');
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = location.coords;
  //     setRegion({
  //       latitude: latitude,
  //       longitude: longitude,
  //       latitudeDelta: 0.03,
  //       longitudeDelta: 0.05,
  //     });
  //   };

  //   getLocation();
  // }, []);

  // if (!region) return null;

  return (
    <S.MapScreenContainer showsVerticalScrollIndicator={false}>
      <NaverMapView
        style={{ flex: 1 }}
        layerGroups={{
          BUILDING: true,
          BICYCLE: false,
          CADASTRAL: false,
          MOUNTAIN: false,
          TRAFFIC: false,
          TRANSIT: false,
        }}
        initialRegion={jejuRegion}
        isExtentBoundedInKorea={true}
      >
        {popUpMarkerItems.map((item, idx) => (
          <NaverMapMarkerOverlay
            key={idx}
            latitude={item.latitude}
            longitude={item.longitude}
            anchor={{ x: 0.5, y: 1 }}
            width={32}
            height={47}
            image={Images.marker}
          />
        ))}
      </NaverMapView>
      <S.BottomArea />
    </S.MapScreenContainer>
  );
};

export default MapScreen;
