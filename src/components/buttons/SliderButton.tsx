import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './SliderButton.module.scss';

const cx = classNames.bind(styles);

type SliderButtonProps = {
  onClick?: () => void;
  type?: 'left' | 'right';
};

const SliderButton = ({ onClick, type = 'left' }: SliderButtonProps) => {
  const { active } = type === 'left' ? SVGS.arrow.left : SVGS.arrow.right;

  return (
    <div className={cx('lg-only')}>
      <button className={cx('clan-slider-btn', `btn-${type}`)} onClick={onClick}>
        <img src={active.url} alt={active.alt} width={20} height={20} />
      </button>
    </div>
  );
};

export default SliderButton;
