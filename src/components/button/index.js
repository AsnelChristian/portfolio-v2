import { Btn } from './styles/button';

export default function Button({ children, primary, ...restProps }) {
  return <Btn primary={primary}>{children}</Btn>;
}
