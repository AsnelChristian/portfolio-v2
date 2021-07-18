import { NavBar, Nav, NavBtn } from './styles/navbar';

export default function Navigation({ children, ...restProps }) {
  return (
    <NavBar {...restProps}>
      {children}
      <NavBtn />
    </NavBar>
  );
}

Navigation.Nav = function NavigationNav({ children, ...restProps }) {
  return <Nav {...restProps}> {children}</Nav>;
};
