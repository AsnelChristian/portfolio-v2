import styled from 'styled-components/macro';

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  padding: 1.3rem 2.2rem;
  position: relative;
  border-radius: 2px;
  background: ${(props) => (props.primary ? props.theme.colors.background3 : props.theme.colors.background4)};
  color: ${(props) => (props.primary ? props.theme.colors.background2 : props.theme.colors.black)};
  box-shadow: ${(props) => props.theme.shadows.normal};
  letter-spacing: 0.25rem;
  font-family: ${(props) => props.theme.fonts.nav};
  transition: all 0.2s;
  font-size: inherit;
  font-weight: 500;

  & > * {
    position: relative;
    z-index: 100;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: ${(props) => (props.primary ? '0' : 'calc(100% - .5rem)')};
    height: 50%;
    transition: 0.4s ease-in;
    background-color: ${(props) => props.theme.colors.white};
    z-index: 10;
  }

  &::after {
    left: 0;
    top: 0;
  }
  &::before {
    right: 0;
    bottom: 0;
  }
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.normal};
    color: ${(props) => (props.primary ? props.theme.colors.black : props.theme.colors.white)};
  }
  &:hover::after,
  &:hover::before {
    width: ${(props) => (props.primary ? 'calc(100% - .5rem)' : '0')};
  }
  &:active {
    box-shadow: ${(props) => props.theme.shadows.subtle};
  }
  &:active::after,
  &:active::before {
    height: 100%;
  }
`;
