import styled from 'styled-components/macro';

export const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.nav};
  display: flex;
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 4rem;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 1rem);
    transform: translateY(-50%);
    width: 6rem;
    height: 0.4rem;
    background-color: ${(props) => props.theme.colors.black};
  }
`;

export const SubSectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.nav};
  font-size: 2rem;
  font-style: italic;
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

export const AboutMain = styled.h2`
  font-size: 4rem;
  margin-bottom: 3rem;
`;

export const Clause = styled.p`
  line-height: 3rem;
  font-weight: 400;
  margin-top: 2rem;
`;
