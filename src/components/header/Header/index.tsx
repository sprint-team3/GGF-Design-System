import classNames from 'classnames/bind';

import Menu from '@/components/header/Menu';
import { PAGE_PATHS, SVGS } from '@/constants/index';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.drawerMenu;

type HeaderProps = {
  children: React.ReactNode;
  logoName: string;
  menuList: string[];
  onClick: () => void;
};

const Header = ({ children, logoName, menuList, onClick }: HeaderProps) => {
  return (
    <div className={cx('container')}>
      <header className={cx('header')}>
        <button className={cx('header-menu-button', 'sm-only')} onClick={onClick}>
          <img src={url} alt={alt} width={24} height={24}></img>
        </button>
        <a className={cx('header-logo')} href={PAGE_PATHS.landing}>
          {logoName}
        </a>
        <div className={cx('header-container-outer')}>
          <div className={cx('sm-hidden')}>
            <Menu menuList={menuList} />
          </div>
          <div className={cx('header-container-inner')}>{children}</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
