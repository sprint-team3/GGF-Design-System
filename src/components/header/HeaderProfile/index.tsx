import { RefObject } from 'react';

import classNames from 'classnames/bind';

import Avatar from '@/components/Avatar';
import { SVGS } from '@/constants/index';

import styles from './HeaderProfile.module.scss';

const cx = classNames.bind(styles);

const { top, bottom } = SVGS.arrow;

type HeaderProfileProps = {
  nickname: string;
  profileImageUrl: string;
  isActivated: boolean;
  onClick: () => void;
  headerProfileRef: RefObject<HTMLButtonElement>;
};

const HeaderProfile = ({ nickname, profileImageUrl, isActivated, onClick, headerProfileRef }: HeaderProfileProps) => {
  const { url, alt } = isActivated ? top : bottom;

  return (
    <div>
      <button className={cx('header-profile')} onClick={onClick} ref={headerProfileRef}>
        <Avatar size='small' isActivated={isActivated} profileImageUrl={profileImageUrl} />
        <div className={cx('header-profile-container-inner')}>
          <span className={cx('lg-only')}>{nickname}</span>
          <img className={cx('sm-hidden')} src={url} alt={alt} width={16} height={16} />
        </div>
      </button>
    </div>
  );
};

export default HeaderProfile;
