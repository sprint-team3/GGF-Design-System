import { RefObject } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import Avatar from '@/components/Avatar';
import useSignout from '@/hooks/useSignout';

import styles from './UserMenu.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.button.setting;

type UserMenuProps = {
  profileImageUrl: string;
  nickname: string;
  email: string;
  accountPath: string;
  mypagePath: string;
  userMenuRef: RefObject<HTMLDivElement>;
  onClick: () => void;
};

const UserMenu = ({
  profileImageUrl,
  nickname,
  email,
  accountPath,
  mypagePath,
  userMenuRef,
  onClick,
}: UserMenuProps) => {
  const signout = useSignout();

  const handleClickSignout = () => {
    onClick();
    signout();
  };

  return (
    <div className={cx('container')} ref={userMenuRef}>
      <div className={cx('container-user')}>
        <Avatar size='medium' profileImageUrl={profileImageUrl} />
        <div className={cx('container-user-info')}>
          <div className={cx('container-nickname')}>
            <p className={cx('nickname')}>{nickname}</p>
            <a onClick={onClick} href={accountPath}>
              <img src={url} alt={alt} width={18} height={18} />
            </a>
          </div>
          <div className={cx('email')}>{email}</div>
        </div>
      </div>
      <div className={cx('container-button')}>
        <a className={cx('container-button-mypage')} onClick={onClick} href={mypagePath}>
          My Page
        </a>
        <button className={cx('container-button-logout')} onClick={handleClickSignout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
