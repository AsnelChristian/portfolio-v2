import { TerminalContainer, ControlBar, ControlButton, ControlScreen, ControlCommand } from './styles/terminal';

export default function Terminal({ children, ...restProps }) {
  return <TerminalContainer {...restProps}>{children}</TerminalContainer>;
}

Terminal.ControlBar = function TerminalControlBar({ children, ...restProps }) {
  return (
    <ControlBar {...restProps}>
      <ControlButton color="red" />
      <ControlButton color="yellow" />
      <ControlButton color="green" />
    </ControlBar>
  );
};

Terminal.ControlScreen = function TerminalControlScreen({ children, ...restProps }) {
  return (
    <ControlScreen {...restProps}>
      <ControlCommand />
      {children}
    </ControlScreen>
  );
};
