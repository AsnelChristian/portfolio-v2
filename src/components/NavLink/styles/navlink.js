import styled from 'styled-components/macro';

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.nav};
  color: ${(props) => props.theme.colors.black};
  display: inline-flex;
  position: relative;
  transition: all 0.2s;
  padding: 1.5rem 0;
  margin: 1rem 3.5rem 1rem 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 1rem 1.7rem 1rem 1rem;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    width: 95%;
    height: 4px;
    background-color: ${(props) => props.theme.colors.primary2};
    transform-origin: center;
    transform: translateX(-50%) translate3d(0, 5px, 0);
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateZ(0) scale3d(1.1, 1.1, 1.1)
      ${(props) => (props.orient ? 'rotate(2deg)' : 'rotate(-2deg)')};
  }
`;
