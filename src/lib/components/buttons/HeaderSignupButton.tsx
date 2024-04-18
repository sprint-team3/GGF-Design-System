import classNames from 'classnames/bind';

import styles from './HeaderSignButton.module.scss';

const cx = classNames.bind(styles);

type HeaderSignupButtonProps = {
  text: string;
  path: string;
};

export const HeaderSignupButton = ({ text, path }: HeaderSignupButtonProps) => {
  return (
    <a href={path}>
      <button className={cx('signup-btn')}>
        <div className={cx('text')}>{text}</div>
      </button>
    </a>
  );
};
