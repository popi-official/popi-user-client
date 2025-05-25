import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import { S } from './MapScreen.style';

const Images = {
  marker: require('@/assets/images/common/marker.webp'),
};

const jejuRegion: Region = {
  latitude: 33.20530773,
  longitude: 126.14656715029,
  latitudeDelta: 0.38,
  longitudeDelta: 0.8,
};

export default function MapScreen() {
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
        <NaverMapMarkerOverlay
          latitude={33.3565607356}
          longitude={126.48599018}
          anchor={{ x: 0.5, y: 1 }}
          width={32}
          height={47}
          image={Images.marker}
        />
      </NaverMapView>
      <S.BottomArea />
    </S.MapScreenContainer>
  );
}
