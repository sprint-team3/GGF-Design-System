import { useState } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import useToggleButton from '@/hooks/useToggleButton';

import styles from './CountButton.module.scss';

const cx = classNames.bind(styles);
const { add, remove } = SVGS.button;

type CountButtonProps = {
  label?: string;
  info?: string;
  onClick?: (count: number) => void;
  maxCount?: number;
  minCount?: number;
  isDisabled?: boolean;
};

const CountButton = ({ label, info, onClick, maxCount, minCount = 0, isDisabled = false }: CountButtonProps) => {
  const [count, setCount] = useState(0);

  const { isVisible: isHoverAddButton, handleToggleClick: handleAddButtonState } = useToggleButton();
  const { isVisible: isHoverRemoveButton, handleToggleClick: handleRemoveButtonState } = useToggleButton();

  const { url: addUrl, alt: addAlt } = !isDisabled && isHoverAddButton ? add.active : add.default;
  const { url: removeUrl, alt: removeAlt } = !isDisabled && isHoverRemoveButton ? remove.active : remove.default;

  const handleRemoveClick = () => {
    const newCount = Math.max(minCount, count - 1);
    setCount(newCount);
    onClick && onClick(newCount);
  };

  const handleAddClick = () => {
    const newCount = maxCount !== undefined ? Math.min(maxCount, count + 1) : count + 1;
    setCount(newCount);
    onClick && onClick(newCount);
  };

  return (
    <div className={cx('count-btn-field')}>
      {(label || info) && (
        <div className={cx('label-area')}>
          {label && <span className={cx('label-area-text')}>{label}</span>}
          {info && <span className={cx('label-area-info')}>{info}</span>}
        </div>
      )}

      <div className={cx('btn-area')}>
        <button
          type='button'
          className={cx('btn-area-remove')}
          onClick={handleRemoveClick}
          onMouseEnter={handleRemoveButtonState}
          onMouseLeave={handleRemoveButtonState}
          disabled={isDisabled}
        >
          <img src={removeUrl} alt={removeAlt} width={24} height={24} />
        </button>
        <div className={cx('btn-area-count')}>{count}</div>
        <button
          type='button'
          className={cx('btn-area-add')}
          onClick={handleAddClick}
          onMouseEnter={handleAddButtonState}
          onMouseLeave={handleAddButtonState}
          disabled={isDisabled}
        >
          <img src={addUrl} alt={addAlt} width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default CountButton;
