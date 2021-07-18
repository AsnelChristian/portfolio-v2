import {
  Container,
  DescriptionContainer,
  DescriptionImageContainer,
  DescriptionStoryContainer,
  TimelineContainer,
} from './styles/about-section';

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
About.Description = function AboutDescription({ children, ...restProps }) {
  return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>;
};
About.DescriptionStory = function AboutDescriptionStory({ children, ...restProps }) {
  return <DescriptionStoryContainer {...restProps}>{children}</DescriptionStoryContainer>;
};
About.DescriptionImage = function AboutDescriptionImage({ children, ...restProps }) {
  return <DescriptionImageContainer {...restProps}>{children}</DescriptionImageContainer>;
};
About.Timeline = function Timeline({ children, ...restProps }) {
  return <TimelineContainer {...restProps}>{children}</TimelineContainer>;
};
