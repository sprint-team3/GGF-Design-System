import { RefObject } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import Avatar from '@/components/Avatar';

import styles from './UserMenu.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.button.setting;

type UserMenuProps = {
  profileImageUrl: string;
  nickname: string;
  email: string;
  mypageText: string;
  logoutText: string;
  accountPath: string;
  mypagePath: string;
  handleCloseUserMenu: () => void;
  handleClickSignout: () => void;
  userMenuRef?: RefObject<HTMLDivElement>;
};

const UserMenu = ({
  profileImageUrl,
  nickname,
  email,
  mypageText,
  logoutText,
  accountPath,
  mypagePath,
  handleCloseUserMenu,
  handleClickSignout,
  userMenuRef,
}: UserMenuProps) => {
  return (
    <div className={cx('container')} ref={userMenuRef}>
      <div className={cx('container-user')}>
        <Avatar size='medium' profileImageUrl={profileImageUrl} />
        <div className={cx('container-user-info')}>
          <div className={cx('container-nickname')}>
            <p className={cx('nickname')}>{nickname}</p>
            <a onClick={handleCloseUserMenu} href={accountPath}>
              <img src={url} alt={alt} width={18} height={18} />
            </a>
          </div>
          <div className={cx('email')}>{email}</div>
        </div>
      </div>
      <div className={cx('container-button')}>
        <a className={cx('container-button-mypage')} onClick={handleCloseUserMenu} href={mypagePath}>
          {mypageText}
        </a>
        <button className={cx('container-button-logout')} onClick={handleClickSignout}>
          {logoutText}
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
