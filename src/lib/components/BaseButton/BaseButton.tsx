import classNames from 'classnames/bind';

import styles from './BaseButton.module.scss';

const cx = classNames.bind(styles);

type BaseButtonProps = {
  children?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  variant?: 'fill' | 'ghost' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?: 'yellow' | 'purple' | 'red';
  type?: 'button' | 'submit';
  isQuantico?: boolean;
};

const BaseButton = ({
  children,
  isDisabled,
  onClick,
  variant = 'fill',
  size = 'medium',
  color = 'yellow',
  type = 'button',
  isQuantico = false,
}: BaseButtonProps) => {
  const buttonTheme = variant === 'outline' ? 'btn-theme-outline' : `btn-theme-${variant}-${color}`;

  return (
    <button
      className={cx(`btn-size-${size}`, buttonTheme, { 'no-hover': isQuantico })}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      <span className={cx({ quantico: isQuantico }, { disabled: isDisabled })}>{children}</span>
    </button>
  );
};

export default BaseButton;
