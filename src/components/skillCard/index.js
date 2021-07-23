import { Card, CardIcon, CardName } from './styles/skillCard';
import Sprite from '../../sprite.svg';

export default function SkillCard({ children, ico, name, active, shadow, ...restProps }) {
  return (
    <Card active={active} shadow={shadow}>
      <CardIcon>
        <use xlinkHref={`${Sprite}#icon-${ico}`} />
      </CardIcon>
      <CardName>{name}</CardName>
    </Card>
  );
}
