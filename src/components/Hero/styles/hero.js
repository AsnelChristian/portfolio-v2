import styled from 'styled-components/macro';

export const Container = styled.section`
  grid-column: center-start/center-end;
  min-height: 100vh;
  margin: 0 8rem;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 6rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 4rem;
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    margin: 0;
  }
`;

export const HeroBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  align-items: start;
`;

export const HeroCTA = styled.ul`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;

  & > * {
    &:not(last-child) {
      margin-right: 5rem;
    }
  }
`;

export const BgContainer = styled.div`
  position: absolute;
  top: calc(50% + 5rem);
  width: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;
`;
