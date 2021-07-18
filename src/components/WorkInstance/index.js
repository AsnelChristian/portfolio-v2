import {
  Container,
  ViewContainer,
  DescContainer,
  InfoContainer,
  ToolsContainer,
  View,
  Title,
  Section,
} from './styles/workinstance';

export default function WorkInstance({ children, flow, ...restProps }) {
  return (
    <Container flow={flow} {...restProps}>
      {children}
    </Container>
  );
}
WorkInstance.Container = function WorkInstanceSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
WorkInstance.View = function WorkInstanceView({ children, img, flow, linksTo, ...restProps }) {
  return (
    <ViewContainer href={linksTo} flow={flow} {...restProps} target="_blank">
      <View src={img} />
    </ViewContainer>
  );
};
WorkInstance.Info = function WorkInstanceInfo({ children, ...restProps }) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};
WorkInstance.Title = function WorkInstanceTitle({ children, linksTo, ...restProps }) {
  return (
    <Title href={linksTo} {...restProps}>
      {children}
    </Title>
  );
};
WorkInstance.Desc = function WorkInstanceDesc({ children, ...restProps }) {
  return <DescContainer {...restProps}>{children}</DescContainer>;
};
WorkInstance.Tools = function WorkInstanceTools({ children, ...restProps }) {
  return <ToolsContainer {...restProps}>{children}</ToolsContainer>;
};
