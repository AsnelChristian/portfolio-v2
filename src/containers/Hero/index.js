import { BgContainer, Container, HeroBlock, HeroMainText, HeroSubText, HeroMiniText, HeroCTA } from './styles/hero';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Hero = function HeaderHero({ children, ...restProps }) {
  return <HeroBlock {...restProps}>{children}</HeroBlock>;
};

Header.Hero.Main = function HeaderHero({ children, ...restProps }) {
  return <HeroMainText {...restProps}>{children}</HeroMainText>;
};
Header.Hero.Sub = function SubHero({ children, ...restProps }) {
  return <HeroSubText {...restProps}>{children}</HeroSubText>;
};
Header.Hero.Mini = function MiniHero({ children, ...restProps }) {
  return <HeroMiniText {...restProps}>{children}</HeroMiniText>;
};

Header.CTA = function HeaderCTat({ children, ...restProps }) {
  return <HeroCTA {...restProps}>{children}</HeroCTA>;
};

Header.Background = function HeaderBackground({ children, ...restProps }) {
  return <BgContainer {...restProps}>{children}</BgContainer>;
};
