import styled from 'styled-components';

export const NavBar = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'flex')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-4rem)')};
  background-color: ${(props) => (props.shadow ? 'rgba(255, 255, 255, .4)' : 'transparent')};
  box-shadow: ${(props) => (props.shadow ? '0px 3px 8px rgba(0,0,0,0.1)' : 'none')};
  backdrop-filter: ${(props) => (props.shadow ? 'blur(10px)' : 'none')};

  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  margin-bottom: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 5rem;
  z-index: 9999;
  width: 100%;
  transition: all 0.3s ease-in-out;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3rem;
  }
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

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-4rem)}')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 3rem !important;

  & > * {
    &:not(last-child) {
      margin-top: 1rem;
    }
  }
`;
