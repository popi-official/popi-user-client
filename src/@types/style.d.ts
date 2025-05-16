import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      slate50: string;
      slate100: string;
      // ... 기타 color 속성
    };
    mediaSize: {
      // 미디어 사이즈 속성들
    };
    fontSize: {
      // 폰트 사이즈 속성들
    };
    size: {
      // 사이즈 속성들
    };
    // spacing, typography, borderRadius는 선택적으로 설정
    spacing?: any;
    typography?: any;
    borderRadius?: any;
  }
}
