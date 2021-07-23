import styled from 'styled-components/macro';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  border-bottom-left-radius: ${(props) => (props.start === 0 ? 0 : '5rem')};
  border-top-left-radius: ${(props) => (props.start === 0 ? 0 : '5rem')};
  border-bottom-right-radius: ${(props) => (props.row === 1 ? 0 : '5rem')};
  border-top-right-radius: ${(props) => (props.row === 1 ? 0 : '5rem')};
  min-height: 15rem;
  grid-row: ${(props) => props.row};
  background-color: rgba(
    ${(props) => {
      const { theme, row } = props;
      if (row === 4 || row === 1) {
        return theme.colors.ternary1;
      }
      if (row === 3) {
        return theme.colors.ternary2;
      }
      return theme.colors.ternary3;
    }},
    0.15
  );
  grid-column: ${(props) => `${(4 - props.row * 1) * 2 + 1} / ${(5 - props.row * 1) * 2 + 2 + 4 * 2}`};

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1/17;
  }
`;
// grid-column: ${(props) => `${props.start * 2 + 1} / ${props.start * 2 + props.length * 2 + 1}`};

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2rem;
`;

export const CardTitle = styled.h4`
  margin-bottom: 1.5rem;
`;
export const CardInfo = styled.p`
  font-family: ${(props) => props.theme.fonts.nav};
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.9rem;
  margin-bottom: 1rem;
`;

export const CardPeriod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.nav};
  min-width: max-content;
`;
