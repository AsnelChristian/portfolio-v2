import { NavBar, Nav } from './styles/navbar';

export default function Navigation({ children, ...restProps }) {
  return <NavBar {...restProps}>{children}</NavBar>;
}

Navigation.Nav = function NavigationNav({ children, ...restProps }) {
  return <Nav {...restProps}> {children}</Nav>;
};
