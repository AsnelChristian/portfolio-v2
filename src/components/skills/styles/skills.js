import styled from 'styled-components/macro';

export const Container = styled.div`
  grid-column: center-start/center-end;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 8rem 8rem;
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

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const TerminalContainer = styled.div`
  grid-column: 1/6;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 1/7;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1/-1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ListContainer = styled.div`
  grid-column: 7/-1;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1/-1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: flex-start;
    justify-content: flex-start;
  }

  & > * {
    margin-right: 1rem;
  }
`;
