import classNames from 'classnames/bind';

import styles from './HeaderSigninButton.module.scss';

const cx = classNames.bind(styles);

type HeaderSigninButtonProps = {
  text: string;
  path: string;
};

const HeaderSigninButton = ({ text, path }: HeaderSigninButtonProps) => {
  return (
    <a href={path}>
      <button className={cx('signin-btn')}>
        <span className={cx('text')}>{text}</span>
      </button>
    </a>
  );
};

export default HeaderSigninButton;
