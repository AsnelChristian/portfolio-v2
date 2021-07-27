import styled from 'styled-components/macro';

export const Container = styled.div`
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

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 12rem;
    height: 3rem;
    width: 3rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    background: linear-gradient(
      to top right,
      #fff,
      #fff 50%,
      ${(props) => props.theme.colors.black} 50%,
      ${(props) => props.theme.colors.black} 50%
    );
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 10rem;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;
export const DescriptionStoryContainer = styled.div`
  margin-left: 5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 5rem 2rem;
    text-align: center;
  }
`;
export const DescriptionImageContainer = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 10px 50px rgba(0, 21, 64, 0.128559);
  background-image: url('/images/IMG_4445.jpg');
  background-size: cover;
  object-fit: cover;
  max-width: 45rem;
  width: 100%;
  min-width: 30rem;
  height: 40rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 auto 4em;
  }
`;
export const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, [col-start] minmax(min-content, 8rem) [col-end]);
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 1rem;
  background: ${(props) => props.theme.colors.background5};
  border-radius: 3rem;
  padding: 5rem 0;
  margin-bottom: 5rem;
`;
