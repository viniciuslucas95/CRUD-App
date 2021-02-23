import styled from 'styled-components';

export const UsersListStyle = styled.div`
  position: relative;
  display: block;
  margin: 1rem auto;
  width: fit-content;

  button,
  h3 {
    display: inline-block;
  }

  button {
    position: absolute;
    font-weight: bold;
    margin-left: 1rem;
  }

  li {
    list-style: none;
    margin-top: 1rem;
  }
`;
