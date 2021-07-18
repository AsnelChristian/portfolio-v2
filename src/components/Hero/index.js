import { BgContainer, Container, HeroBlock, HeroCTA } from './styles/hero';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Hero = function HeaderHero({ children, ...restProps }) {
  return <HeroBlock {...restProps}>{children}</HeroBlock>;
};

Header.CTA = function HeaderCTat({ children, ...restProps }) {
  return <HeroCTA {...restProps}>{children}</HeroCTA>;
};

Header.Background = function HeaderBackground({ children, ...restProps }) {
  return <BgContainer {...restProps}>{children}</BgContainer>;
};
