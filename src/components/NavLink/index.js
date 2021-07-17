import { Link } from './styles/navlink';

export default function NavLink({ children, orient, ...restProps }) {
  return (
    <Link orient={orient} {...restProps}>
      {children}
    </Link>
  );
}
