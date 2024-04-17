import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type Menu = {
  menu: string;
  path: string;
};

type MenuProps = {
  menuList: Menu[];
  activatedMenu: number;
  handleActivatedMenu: (index: number) => void;
};

const Menu = ({ menuList, activatedMenu, handleActivatedMenu }: MenuProps) => {
  return (
    <nav>
      <ul className={cx('menu')}>
        {menuList.map((value, index) => (
          <li key={index}>
            <a
              href={value.path}
              className={cx('menu-item', {
                'menu-item-activated': activatedMenu === index,
              })}
              onClick={() => handleActivatedMenu(index)}
            >
              {value.menu}
              {activatedMenu === index && <p className={cx('menu-under-line')}></p>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
