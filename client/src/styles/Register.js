import styled from 'styled-components';

export const RegisterStyle = styled.div`
  margin: 1rem auto;
  width: fit-content;
  padding: 0.5rem 1rem;

  h2 {
    width: fit-content;
    margin: auto;
  }

  button,
  input {
    display: block;
    font-size: 1rem;
  }

  button {
    font-weight: bold;
    margin: auto;
    padding: 0.2rem 0.4rem;
  }

  input {
    margin: 1rem auto;
    padding: 0.1rem 0.2rem;
  }

  @media screen and (max-width: 320px) {
    button,
    input {
      font-size: 0.9rem;
    }
  }
`;
