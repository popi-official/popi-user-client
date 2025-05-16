import {PaperProvider} from 'react-native-paper';

const theme = {
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#f6f6f6',
  },
};

export default function CustomPaperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
