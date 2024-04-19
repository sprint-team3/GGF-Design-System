import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import useToggleButton from '@/hooks/useToggleButton';

import styles from './OperationButton.module.scss';

const cx = classNames.bind(styles);

type OperationButtonProps = {
  isDisabled?: boolean;
  onClick?: () => void;
  type?: 'add' | 'remove';
};

const OperationButton = ({ isDisabled, onClick, type = 'add' }: OperationButtonProps) => {
  const { isVisible: isHovering, handleToggleClick: toggleHovering } = useToggleButton();

  const isButtonActive = (type === 'add' && !isDisabled) || isHovering;

  const { default: defaultButton, active: activeButton } = SVGS.button[type];
  const { url, alt } = isButtonActive ? activeButton : defaultButton;

  const handleToggleHovering = () => {
    if (isDisabled) return;

    toggleHovering();
  };

  return (
    <button
      className={cx(`btn-operation-${type}`)}
      disabled={isDisabled}
      type='button'
      onClick={onClick}
      onMouseEnter={handleToggleHovering}
      onMouseLeave={handleToggleHovering}
    >
      <img src={url} alt={alt} width={24} height={24} />
    </button>
  );
};

export default OperationButton;
