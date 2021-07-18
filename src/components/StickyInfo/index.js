import { StickyContainer, StickyDash, StickyLink } from './styles/sticky-info';
import Sprite from '../../sprite.svg';

export default function StickyInfo({ children, loc, ...restProps }) {
  return (
    <StickyContainer loc={loc} {...restProps}>
      {children}
      <StickyDash />
    </StickyContainer>
  );
}

StickyInfo.Link = function StickyInfoLink({ children, ico, text, linksTo, ...restProps }) {
  return (
    <StickyLink href={linksTo} {...restProps}>
      {ico ? (
        <svg>
          <use xlinkHref={`${Sprite}#icon-${ico}`} />
        </svg>
      ) : (
        <span>{text}</span>
      )}
    </StickyLink>
  );
};
