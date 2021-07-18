import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  margin-bottom: 5rem;
  position: fixed;
  top: 0;
  left: 5rem;
  z-index: 9999;
  width: calc(100% - 10rem);
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: calc(100% - 6rem);
    left: 3rem;
  }

  transition: all 0.3s ease-in-out;
`;

export const Nav = styled.ul`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
    opacity: 0;
  }
`;
