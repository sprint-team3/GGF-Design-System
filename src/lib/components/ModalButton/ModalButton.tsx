import classNames from 'classnames/bind';

import styles from './ModalButton.module.scss';

const cx = classNames.bind(styles);

type ModalButtonProps = {
  children?: string;
  onClick: () => void;
  variant?: 'success' | 'warning';
};

const ModalButton = ({ children, onClick, variant = 'success' }: ModalButtonProps) => {
  return (
    <button className={cx('btn', { [`btn-state-${variant}`]: variant })} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModalButton;
