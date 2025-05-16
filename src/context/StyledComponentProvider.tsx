import {ThemeProvider} from 'styled-components';
import theme from '../theme/Theme';

export default function StyledComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
