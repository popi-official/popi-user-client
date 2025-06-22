import React, { memo, useState } from 'react';
import {
  Image,
  ImageStyle,
  ActivityIndicator,
  View,
  StyleProp,
  ImageResizeMode,
} from 'react-native';

interface OptimizedImageProps {
  source: { uri: string };
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  placeholder?: boolean;
}

const OptimizedImage = memo(
  ({ source, style, resizeMode = 'cover', placeholder = true }: OptimizedImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    const handleLoadEnd = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    if (hasError) {
      return (
        <View
          style={[
            style,
            { backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' },
          ]}
        >
          {/* 에러 플레이스홀더 */}
        </View>
      );
    }

    return (
      <View style={{ position: 'relative' }}>
        <Image
          source={source}
          style={style}
          resizeMode={resizeMode}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
          onError={handleError}
        />
        {isLoading && placeholder && (
          <View
            style={[
              style,
              {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
              },
            ]}
          >
            <ActivityIndicator size="small" color="#999" />
          </View>
        )}
      </View>
    );
  },
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
