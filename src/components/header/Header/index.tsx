import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import Menu from '@/components/header/Menu';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.drawerMenu;

type HeaderProps = {
  path: string;
  logoName: string;
  menuList: string[];
  activatedGame: number;
  handleActivatedGame: () => void;
  handleOpenDrawerMenu: () => void;
  children?: React.ReactNode;
};

const Header = ({
  path,
  logoName,
  menuList,
  activatedGame,
  handleActivatedGame,
  handleOpenDrawerMenu,
  children,
}: HeaderProps) => {
  return (
    <div className={cx('container')}>
      <header className={cx('header')}>
        <button className={cx('header-menu-button', 'sm-only')} onClick={handleOpenDrawerMenu}>
          <img src={url} alt={alt} width={24} height={24}></img>
        </button>
        <a className={cx('header-logo')} href={path}>
          {logoName}
        </a>
        <div className={cx('header-container-outer')}>
          <div className={cx('sm-hidden')}>
            <Menu menuList={menuList} activatedGame={activatedGame} handleActivatedGame={handleActivatedGame} />
          </div>
          <div className={cx('header-container-inner')}>{children}</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
