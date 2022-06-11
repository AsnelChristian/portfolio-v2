import styled from 'styled-components/macro';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 7.5rem;
  width: 7.5rem;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  box-shadow: ${(props) => (props.active && props.shadow ? props.theme.shadows.blend2 : 'none')};
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.white};
  border: ${({ border, theme }) => (border ? `1px solid ${theme.colors.black}` : '0px solid white')};
`;

export const CardIcon = styled.svg`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 1.1rem;
`;

export const CardName = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.2rem;
`;
