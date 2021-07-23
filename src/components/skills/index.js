import { Container, SkillsContainer, TerminalContainer, ListContainer, List } from './styles/skills';

export default function Skills({ children, ...restProps }) {
  return <SkillsContainer {...restProps}>{children}</SkillsContainer>;
}

Skills.Section = function SkillsSection({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Skills.TerminalContainer = function SkillsTerminalContainer({ children, ...restProps }) {
  return <TerminalContainer {...restProps}>{children}</TerminalContainer>;
};
Skills.ListContainer = function SkillsListContainer({ children, ...restProps }) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};
Skills.List = function SkillsList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
