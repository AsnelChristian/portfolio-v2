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

export const NavBtn = styled.div`
  display: none;
  opacity: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    opacity: 1;
  }
  position: relative;
  padding: 0.8rem 2rem;
  cursor: pointer;
  z-index: 1400;
  transition: all 0.2s;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.3rem;
    background: ${(props) => props.theme.colors.black};
    transition: top 0s, width 0.2s, transform 0.4s ease-in;
    transform-origin: center;
  }
  &::after {
    left: 0;
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    top: ${({ open }) => (open ? 'calc(50% - .1rem)' : '0')};
  }
  &::before {
    right: 0;
    bottom: ${({ open }) => (open ? 'calc(50% - .1rem)' : '0')};
    width: ${({ open }) => (open ? '100%' : '50%')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:hover::after {
    //background: ${(props) => props.theme.colors.background3};
  }
  &:hover::before {
    // background: ${(props) => props.theme.colors.background3};
    width: 100%;
  }
`;
