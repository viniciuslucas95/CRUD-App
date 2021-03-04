import styled from 'styled-components';

export const UsersListStyle = styled.main`
  padding: 1rem 2rem;

  h2 {
    width: fit-content;
    margin: auto;
  }

  > div {
    margin: 1rem auto;
    width: fit-content;
  }

  li {
    list-style: none;
    margin-top: 1rem;
    word-break: break-all;
  }

  li > div > button {
    padding: 0.05rem 0.2rem;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  li > div > button:nth-child(1) {
    margin-right: 0.5rem;
  }
`;
