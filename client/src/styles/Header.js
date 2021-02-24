import styled, { css, keyframes } from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  padding: 0.5rem 2rem;

  h1 {
    font-size: 1.9rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    display: block;
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

const enableNavBar = keyframes`
  from{
    left: 200vw;
  }to{
    left: 80vw;
  }
`;

const disableNavBar = keyframes`
  from{
    right: 0;
  }to{
    right: 100vw;
  }
`;

export const NavBarStyle = styled.nav`
  position: fixed;
  padding: 1rem 2rem;
  width: 50%;
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
    width: fit-content;
    margin: auto;
    list-style: none;
  }

  li {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 425px) {
    width: 60%;
    li {
      font-size: 1.2rem;
    }
  }
`;
