import classNames from 'classnames/bind';

import styles from './HeaderSignButton.module.scss';

const cx = classNames.bind(styles);

type HeaderSigninButtonProps = {
  path: string;
};

export const HeaderSigninButton = ({ path }: HeaderSigninButtonProps) => {
  return (
    <a href={path}>
      <button className={cx('signin-btn')}>
        <span className={cx('text')}>SIGNIN</span>
      </button>
    </a>
  );
};
