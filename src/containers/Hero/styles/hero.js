import styled from 'styled-components/macro';

export const Container = styled.section`
  grid-column: center-start/center-end;
  min-height: 90vh;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

export const HeroMainText = styled.h1`
  font-size: clamp(2rem, 8vw, 6rem);
  width: max-content;
  margin-top: -0.1rem;
  margin-bottom: 2rem;
`;
export const HeroSubText = styled.h2`
  font-size: 3rem;
`;
export const HeroMiniText = styled.h3`
  line-height: 3rem;
  font-size: 2rem;
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
  top: 50%;
  width: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;
`;
