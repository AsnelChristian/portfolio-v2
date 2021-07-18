import {
  SectionTitle,
  HeroMainText,
  HeroMiniText,
  HeroSubText,
  Clause,
  SubSectionTitle,
  AboutMain,
} from './styles/typography';

export default function Typography({ children, ...restProps }) {
  return <></>;
}
Typography.SectionTitle = function TypographySectionTitle({ children, ...restProps }) {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};
Typography.SubSectionTitle = function TypographySubSectionTitle({ children, ...restProps }) {
  return <SubSectionTitle {...restProps}>{children}</SubSectionTitle>;
};
Typography.HeroMain = function TypographyHeaderHero({ children, ...restProps }) {
  return <HeroMainText {...restProps}>{children}</HeroMainText>;
};
Typography.HeroSub = function TypographySubHero({ children, ...restProps }) {
  return <HeroSubText {...restProps}>{children}</HeroSubText>;
};
Typography.HeroMini = function TypographyMiniHero({ children, ...restProps }) {
  return <HeroMiniText {...restProps}>{children}</HeroMiniText>;
};

Typography.AboutMain = function TypographyAboutMain({ children, ...restProps }) {
  return <AboutMain {...restProps}>{children}</AboutMain>;
};
Typography.Clause = function TypographyClause({ children, ...restProps }) {
  return <Clause {...restProps}>{children}</Clause>;
};
