import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  height: 3.5rem;
  padding: 0.5rem 2rem;

  h1 {
    font-size: 2.2rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 2rem;
      letter-spacing: 0.3rem;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const MenuIconStyle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  :hover {
    width: 2.6rem;
    height: 2.6rem;
    transform: translateX(0.2rem);
    opacity: 0.95;
  }

  div {
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.colors.menuIcon};
  }

  div:nth-child(1) {
    transition: transform 50ms ease-in;

    ${({ toggle }) =>
      toggle
        ? css`
            transform: translateY(225%) rotate(-45deg);
          `
        : css`
            transform: rotate(0);
          `}
  }

  div:nth-child(2) {
    transition: opacity 50ms ease-in;

    ${({ toggle }) =>
      toggle
        ? css`
            opacity: 0;
          `
        : css`
            opacity: 1;
          `}
  }

  div:nth-child(3) {
    transition: transform 50ms ease-in;

    ${({ toggle }) =>
      toggle
        ? css`
            transform: translateY(-225%) rotate(45deg);
          `
        : css`
            transform: rotate(0);
          `}
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavBarStyle = styled.nav`
  ul {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    list-style: none;

    a {
      margin-right: 2rem;
    }

    a:last-child {
      margin-right: 0rem;
    }
  }

  li {
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    padding: 1rem 2rem;
    width: 40%;
    height: calc(100vh - 3.5rem);
    top: 3.5rem;
    right: -100vw;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.headerBackground};
    transition: transform 100ms ease-in;

    ${({ toggle }) =>
      toggle
        ? css`
            transform: translateX(-100vw);
          `
        : css`
            transform: translateX(100vw);
          `}

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      a {
        margin-top: 1rem;
      }

      a:nth-child(1) {
        margin-top: 0;
      }
    }

    li {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 425px) {
    width: 50%;

    li {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 320px) {
    width: 60%;
  }
`;
