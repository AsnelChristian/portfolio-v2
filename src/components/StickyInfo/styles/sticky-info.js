import styled from 'styled-components/macro';

export const StickyContainer = styled.div`
  position: fixed;
  left: ${(props) => (props.loc === 'left' ? '5rem' : 'auto')};
  right: ${(props) => (props.loc === 'right' ? '5rem' : 'auto')};
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    left: ${(props) => (props.loc === 'left' ? '3rem' : 'auto')};
    right: ${(props) => (props.loc === 'right' ? '3rem' : 'auto')};
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    left: ${(props) => (props.loc === 'left' ? '1rem' : 'auto')};
    right: ${(props) => (props.loc === 'right' ? '1rem' : 'auto')};
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
    @media ${(props) => props.theme.breakpoints.phone} {
      font-size: 1.2rem;
    }
  }
  & > svg {
    width: 2rem;
    height: 2rem;
    &:not(last-child) {
      margin-top: 2.3rem;
    }
    fill: ${(props) => props.theme.colors.black};
    transition: all 0.2s ease-in;

    @media ${(props) => props.theme.breakpoints.phone} {
      height: 1rem;
      width: 1rem;
      &:not(last-child) {
        margin-top: 2rem;
      }
    }
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
  @media ${(props) => props.theme.breakpoints.md} {
    height: 6rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    height: 2rem;
  }
  background-color: ${(props) => props.theme.colors.black};
`;
