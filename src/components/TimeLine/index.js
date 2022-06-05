import {
  Container,
  Indicator,
  IndicatorCircle,
  IndicatorHoriz,
  IndicatorOuterCircle,
  InfoContainer,
} from './styles/timeLine';

export const TimeLine = ({ children, variant, ...restProps }) => (
  <Container {...restProps}>
    <Indicator variant={variant}>
      <IndicatorOuterCircle variant={variant} />
      <IndicatorCircle variant={variant} />
    </Indicator>
    <IndicatorHoriz variant={variant} />
    <InfoContainer>{children}</InfoContainer>
  </Container>
);
