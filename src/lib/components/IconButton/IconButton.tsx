import { RefObject } from 'react';

import classNames from 'classnames/bind';

import styles from './IconButton.module.scss';

const cx = classNames.bind(styles);

type IconButtonProps = {
  imageUrl: string;
  imageAlt: string;
  isActivated: boolean;
  onClick: () => void;
  buttonRef?: RefObject<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large';
};

const IconButton = ({ imageUrl, imageAlt, isActivated, onClick, buttonRef, size = 'medium' }: IconButtonProps) => {
  return (
    <button className={cx('icon-button', `frame-outer-${size}`)} onClick={onClick} ref={buttonRef}>
      <div className={cx('dot', 'dot-top', { 'dot-activated': isActivated })}></div>
      <div className={cx('dot', 'dot-right', { 'dot-activated': isActivated })}></div>
      <div className={cx('dot', 'dot-bottom', { 'dot-activated': isActivated })}></div>
      <div className={cx('dot', 'dot-left', { 'dot-activated': isActivated })}></div>
      <div className={cx('frame-inner', `frame-inner-${size}`, { 'frame-inner-activated': isActivated })}>
        <img className={cx('image')} src={imageUrl} alt={imageAlt} />
      </div>
    </button>
  );
};

export default IconButton;
