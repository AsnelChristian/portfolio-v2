import { Card, CardDescription, CardPeriod, CardTitle, CardInfo } from './styles/tile';

export default function TimelineTile({ children, row, length, start, ...restProps }) {
  return (
    <Card row={row} length={length} start={start} {...restProps}>
      {children}
    </Card>
  );
}

TimelineTile.Description = function TimelineTileDescription({ children, ...restProps }) {
  return <CardDescription {...restProps}>{children}</CardDescription>;
};
TimelineTile.Period = function TimelineTilePeriod({ children, ...restProps }) {
  return <CardPeriod {...restProps}>{children}</CardPeriod>;
};
TimelineTile.Title = function TimelineTileTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};
TimelineTile.Info = function TimelineTileInfo({ children, ...restProps }) {
  return <CardInfo {...restProps}>{children}</CardInfo>;
};
