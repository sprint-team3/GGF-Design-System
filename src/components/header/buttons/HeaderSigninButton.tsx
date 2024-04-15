import classNames from 'classnames/bind';

import { PAGE_PATHS } from '@/constants/pagePaths';

import styles from './HeaderSignButton.module.scss';

const cx = classNames.bind(styles);

export const HeaderSigninButton = () => {
  return (
    <a href={PAGE_PATHS.signin}>
      <button className={cx('signin-btn')}>
        <span className={cx('text')}>SIGNIN</span>
      </button>
    </a>
  );
};
