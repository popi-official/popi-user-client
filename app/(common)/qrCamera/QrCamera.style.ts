import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';
import { CameraView } from 'expo-camera';

export const S = {
  QrCameraScreenContainer: styled.View`
    flex: 1;
    background-color: rgb(255, 255, 255); /* 추후 transparent */
    position: relative;
  `,

  BackButtonWrapper: styled.TouchableOpacity`
    position: absolute;
    left: 4px;
    width: 26px;
    height: 26px;
    transform: rotate(180deg);
    z-index: 10;
  `,

  BackButton: styled.Image`
    position: absolute;
    width: 26px;
    height: 26px;
    z-index: 10;
  `,

  CameraWrapper: styled(CameraView)`
    position: 'absolute';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `,

  // 오버레이 전체 컨테이너
  OverlayWrapper: styled.View`
    position: absolute;
    inset: 0;
    justify-content: center;
    align-items: center;
  `,

  TopOverlay: styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 324px;
    background-color: rgba(0, 0, 0, 0.7);
  `,

  BottomOverlay: styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 216px;
    background-color: rgba(0, 0, 0, 0.7);
  `,

  LeftOverlay: styled.View`
    position: absolute;
    top: 324px;
    bottom: 216px;
    left: 0;
    width: 43px;
    background-color: rgba(0, 0, 0, 0.7);
  `,

  RightOverlay: styled.View`
    position: absolute;
    top: 324px;
    bottom: 216px;
    right: 0;
    width: 43px;
    background-color: rgba(0, 0, 0, 0.7);
  `,

  // 가운데 네모 (QR 인식 영역)
  QrBox: styled.View`
    width: 304px;
    height: 304px;
    border-radius: 20px;
  `,

  InstructionText: styled.Text`
    position: absolute;
    align-items: center;
    top: 138px;
    color: ${getThemeColor('gray01')};
    font-size: 24px;
    font-family: ${getThemePretendardFont('bold')};
    text-align: center;
    line-height: 32px;
  `,

  QrFrameLeftTop: styled.View`
    position: absolute;
    top: -14px;
    right: 14px;
    z-index: 10;
  `,

  QrFrameLeftBottom: styled.View`
    position: absolute;
    bottom: 50px;
    right: 14px;
    z-index: 10;
  `,

  QrFrameRightTop: styled.View`
    position: absolute;
    top: -14px;
    left: -50px;
    z-index: 10;
  `,

  QrFrameRightBottom: styled.View`
    position: absolute;
    bottom: 50px;
    left: -50px;
    z-index: 10;
  `,

  QrFrameImage: styled.Image`
    position: absolute;
    width: 64px;
    height: 64px;
    z-index: 10;
  `,
};
