import styled from 'styled-components/macro';

export const ControlButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.7rem;
  border-radius: 100%;
  background-color: ${(props) => (props.color === 'red' ? '#f96256' : '#fdbc3d')};
`;

export const ControlBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background-color: #e4e3e5;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const ControlScreen = styled.div`
  width: 100%;
  min-height: 25rem;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 0 0 0.5rem 0.5rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  color: white;
`;

export const ControlCommand = styled.span`
  position: relative;
  display: inline-block;
  &::before {
    content: '> ';
  }
`;

export const TerminalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows.subtle};
`;
