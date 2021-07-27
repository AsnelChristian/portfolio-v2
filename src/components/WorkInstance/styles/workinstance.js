import styled from 'styled-components/macro';

export const Section = styled.section`
  grid-column: center-start/center-end;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 8rem;
  padding-top: 12rem;
  position: relative;
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 6rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 4rem;
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    margin: 0 2rem;
  }
`;

export const Container = styled.div`
  padding: 4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 2.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    padding: 0;
    box-shadow: ${(props) => props.theme.shadows.blend};
  }
  border-radius: 3rem;
  @media ${(props) => props.theme.breakpoints.phone} {
    border-radius: 2rem;
  }
  background: linear-gradient(
    ${(props) => (props.flow ? 'to right bottom' : 'to top left')},
    rgba(45, 216, 129, 0.4),
    rgba(34, 120, 191, 0.4),
    rgba(180, 153, 255, 0.2)
  );
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  margin-bottom: 8rem;
`;
export const ViewContainer = styled.a`
  cursor: pointer;
  display: block;
  border-radius: 2rem;
  grid-row: 1/-1;
  grid-column: ${(props) => (props.flow ? '1 / 10' : '-10 / -1')};
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: ${(props) => (props.flow ? '1 / 11' : '-11 / -1')};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: ${(props) => (props.flow ? '1 / 12' : '-12 / -1')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: ${(props) => (props.flow ? '1 / 13' : '-13 / -1')};
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  height: 45rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.3),
      rgba(${(props) => props.theme.colors.ternary2}, 0.4)
    );
    transition: opacity 0.3s ease-in-out;
  }
  &:hover::after {
    opacity: 0;
  }
`;

export const View = styled.img`
  border-radius: 1.5rem;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  object-fit: cover;
  @media ${(props) => props.theme.breakpoints.phone} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Title = styled.a`
  font-family: ${(props) => props.theme.fonts.nav};
  margin-bottom: 4rem;
  font-size: 2.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  @media ${(props) => props.theme.breakpoints.md} {
    background: ${(props) => props.theme.colors.bacground1};
    padding: 1rem 2rem;
    z-index: 20;
    transition: background 0.2s ease-in-out, color 0.1s 0.2s ease-out;
  }
  &:hover {
    color: ${(props) => props.theme.colors.white};
    @media ${(props) => props.theme.breakpoints.md} {
      background: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const InfoContainer = styled.div`
  grid-row: 1/-1;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 15;
  padding: 2rem 3rem;

  grid-column: ${(props) => (props.flow ? '7 / -1' : '1 / 7')};
  border-top-right-radius: ${(props) => (props.flow ? '2rem' : '0')};
  border-bottom-right-radius: ${(props) => (props.flow ? '2rem' : '0')};
  border-top-left-radius: ${(props) => (props.flow ? '0' : '2rem')};
  border-bottom-left-radius: ${(props) => (props.flow ? '0' : '2rem')};

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: ${(props) => (props.flow ? '6 / -1' : '1 / 9')};
  }

  // Smaller
  @media ${(props) => props.theme.breakpoints.phone} {
    grid-row: 2;
    margin-top: -10rem;
    grid-column: 1/-1;
    padding: 6rem 3rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.flow ? 'flex-end' : 'flex-start')};
  justify-content: center;
`;
export const DescContainer = styled.div`
  padding: 3rem 3rem;
  background-color: rgba(0, 52, 89, 0.8);
  max-height: 20rem;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  position: relative;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  text-align: ${(props) => (props.flow ? 'right' : 'left')};
  font-family: ${(props) => props.theme.fonts.nav};
  font-weight: 200;
  font-size: 1.4rem;
  line-height: 1.7rem;
  box-shadow: ${(props) => props.theme.shadows.blend};
`;
export const ToolsContainer = styled.ul`
  max-width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 100%;
  }
  flex-wrap: wrap;
  margin-top: -2rem;
  display: flex;
  align-items: ${(props) => (props.flow ? 'flex-end' : 'flex-start')};
  flex-direction: ${(props) => (props.flow ? 'row-reverse' : 'row')};
  position: relative;
  z-index: 60;
  & > * {
    &:not(last-child) {
      cursor: default;
      margin-left: ${(props) => (props.flow ? '1rem' : '0')};
      margin-right: ${(props) => (props.flow ? '0' : '1rem')};
      background: ${(props) => props.theme.colors.background1} !important;
      padding: 1rem;
      box-shadow: ${(props) => props.theme.shadows.blend} !important;
    }
  }
`;
