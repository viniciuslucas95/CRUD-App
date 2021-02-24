import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: 'rgb(25, 25, 25)',
    menuIcon: 'rgb(25, 25, 25)',
    headerBackground: '#6a80af',
    pageBackground: '#a3b5dc',
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
