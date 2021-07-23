import { NavBar, Nav, NavBtn, MenuContainer, Menu } from './styles/navbar';

export default function Navigation({ children, showDrawer, toggleDrawer, show, shadow, ...restProps }) {
  return (
    <NavBar show={show} shadow={shadow} {...restProps}>
      {children}
      <NavBtn onClick={toggleDrawer} open={showDrawer} />
    </NavBar>
  );
}

Navigation.Nav = function NavigationNav({ children, ...restProps }) {
  return <Nav {...restProps}> {children}</Nav>;
};

Navigation.MenuContainer = function NavigationMenuContainer({ children, showDrawer, ...restProps }) {
  return (
    <MenuContainer open={showDrawer} {...restProps}>
      {children}
    </MenuContainer>
  );
};
Navigation.Menu = function NavigationMenu({ children, showDrawer, ...restProps }) {
  return (
    <Menu open={showDrawer} {...restProps}>
      {children}
    </Menu>
  );
};
