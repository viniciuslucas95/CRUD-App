import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Zilla Slab', sans-serif;
    color: ${({ theme }) => theme.colors.text}
  }

  body{
    background-color: ${({ theme }) => theme.colors.pageBackground};
  }
`;

export default globalStyle;
