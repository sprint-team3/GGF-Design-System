import classNames from 'classnames/bind';

import styles from './HeaderSignButton.module.scss';

const cx = classNames.bind(styles);

type HeaderSignupButtonProps = {
  path: string;
};

export const HeaderSignupButton = ({ path }: HeaderSignupButtonProps) => {
  return (
    <a href={path}>
      <button className={cx('signup-btn')}>
        <div className={cx('text')}>SIGNUP</div>
      </button>
    </a>
  );
};
