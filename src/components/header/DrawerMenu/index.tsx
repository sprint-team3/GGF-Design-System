import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './DrawerMenu.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.close.active;

type DrawerMenuProps = {
  menuList: string[];
  onClick: () => void;
};

const DrawerMenu = ({ menuList, onClick }: DrawerMenuProps) => {
  return (
    <aside className={cx('drawer-menu')}>
      <button className={cx('drawer-menu-close-button')} onClick={onClick}>
        <img src={url} alt={alt} width={24} height={24} />
      </button>
      <nav>
        <ul className={cx('drawer-menu-game')}>
          {menuList.map((game, index) => (
            <li className={cx('drawer-menu-game-item')} key={`game-${index}`}>
              <a className={cx('drawer-menu-game-link')} onClick={onClick} href={`/${game}`}>
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
