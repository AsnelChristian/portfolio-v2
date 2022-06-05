import styled from 'styled-components/macro';
import { AwesomeButton } from 'react-awesome-button';

export const Btn = styled(AwesomeButton)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  letter-spacing: 0.25rem;
  font-family: ${(props) => props.theme.fonts.nav};
  transition: all 0.2s;
  font-size: 2rem;
  font-weight: 500;
`;
