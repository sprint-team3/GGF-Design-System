import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './DrawerMenu.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.close.active;

type Menu = {
  menu: string;
  path: string;
};

type DrawerMenuProps = {
  menuList: Menu[];
  onClick: () => void;
};

const DrawerMenu = ({ menuList, onClick }: DrawerMenuProps) => {
  return (
    <aside className={cx('drawer-menu')}>
      <button className={cx('drawer-menu-close-button')} onClick={onClick}>
        <img src={url} alt={alt} width={24} height={24} />
      </button>
      <nav>
        <ul className={cx('drawer-menu-items')}>
          {menuList.map((value, index) => (
            <li className={cx('drawer-menu-item')} key={index}>
              <a className={cx('drawer-menu-link')} onClick={onClick} href={value.path}>
                {value.menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DrawerMenu;
