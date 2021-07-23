import styled from 'styled-components/macro';

export const StickyContainer = styled.div`
  position: fixed;
  left: ${(props) => (props.loc === 'left' ? '5rem' : 'auto')};
  right: ${(props) => (props.loc === 'right' ? '5rem' : 'auto')};
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -10;

  @media ${(props) => props.theme.breakpoints.md} {
    left: ${(props) => (props.loc === 'left' ? '3rem' : 'auto')};
    right: ${(props) => (props.loc === 'right' ? '3rem' : 'auto')};
  }
`;

export const StickyLink = styled.a`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease-in;

  & > span {
    font-family: ${(props) => props.theme.fonts.nav};
    font-size: 1.6rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
  & > svg {
    width: 2rem;
    height: 2rem;
    margin: 1.5rem 0;
    fill: ${(props) => props.theme.colors.black};
    transition: all 0.2s ease-in;
  }

  &:hover {
    & > svg {
      fill: ${(props) => props.theme.colors.primary2};
    }
    color: ${(props) => props.theme.colors.primary2};
    transform: translateY(-4px);
  }
`;

export const StickyDash = styled.div`
  margin-top: 2rem;
  width: 1px;
  height: 8rem;
  background-color: ${(props) => props.theme.colors.black};
`;
