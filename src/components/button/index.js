import { Btn } from './styles/button';
import 'react-awesome-button/dist/styles.css';

export default function Button({ children, primary, ...restProps }) {
  return (
    <Btn primary={primary} {...restProps}>
      {children}
    </Btn>
  );
}
