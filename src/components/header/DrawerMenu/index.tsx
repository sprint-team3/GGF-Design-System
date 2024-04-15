import classNames from 'classnames/bind';

import { GAME_NAME_LIST_EN, SVGS } from '@/constants/index';

import { formatGameToLink } from '@/utils/index';

import styles from './DrawerMenu.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.close.active;

type DrawerMenuProps = {
  onClick: () => void;
};

const DrawerMenu = ({ onClick }: DrawerMenuProps) => {
  return (
    <aside className={cx('drawer-menu')}>
      <button className={cx('drawer-menu-close-button')} onClick={onClick}>
        <img src={url} alt={alt} width={24} height={24} />
      </button>
      <nav>
        <ul className={cx('drawer-menu-game')}>
          {GAME_NAME_LIST_EN.map((game, index) => (
            <li className={cx('drawer-menu-game-item')} key={`game-${index}`}>
              <a className={cx('drawer-menu-game-link')} onClick={onClick} href={`/${formatGameToLink(game)}`}>
                {game}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DrawerMenu;
