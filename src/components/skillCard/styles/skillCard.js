import styled from 'styled-components/macro';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
  width: 8rem;
  padding: 1rem;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.blend};
    background-color: transparent;
  }
  &:active {
    box-shadow: ${(props) => props.theme.shadows.blend2};
    background-color: transparent;
  }
`;

export const CardIcon = styled.svg`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 1.3rem;
`;

export const CardName = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;
