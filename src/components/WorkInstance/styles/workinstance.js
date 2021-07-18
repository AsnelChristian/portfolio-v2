import styled from 'styled-components/macro';

export const Section = styled.section`
  grid-column: center-start/center-end;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 8rem;
  padding-top: 12rem;
  position: relative;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 4rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 6rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  margin-bottom: 8rem;
`;
export const ViewContainer = styled.a`
  cursor: pointer;
  display: block;
  border-radius: 0.5rem;
  grid-row: 1/-1;
  grid-column: ${(props) => (props.flow ? '1 / 9' : '-9 / -1')};
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
      rgba(${(props) => props.theme.colors.ternary2}, 0.3)
    );
    transition: opacity 0.3s ease-in-out;
  }
  &:hover {
    z-index: 100;
  }
  &:hover::after {
    opacity: 0;
  }
`;

export const View = styled.img`
  border-radius: 0.5rem;
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

  &:hover {
    color: ${(props) => props.theme.colors.primary2};
  }
`;

export const InfoContainer = styled.div`
  grid-row: 1/-1;
  grid-column: ${(props) => (props.flow ? '8 / -1' : '1 / 6')};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.flow ? 'flex-end' : 'flex-start')};
  justify-content: center;
`;
export const DescContainer = styled.div`
  padding: 2rem 3rem;
  background-color: rgba(0, 52, 89, 0.8);
  min-height: 15rem;
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
`;
export const ToolsContainer = styled.ul`
  max-width: 80%;
  flex-wrap: wrap;
  margin-top: -1.3rem;
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
      box-shadow: none !important;
    }
  }
`;
