import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './MoreButton.module.scss';

const cx = classNames.bind(styles);

type MoreButtonProps = {
  onClick?: () => void;
  isActive?: boolean;
};

const MoreButton = ({ onClick, isActive = false }: MoreButtonProps) => {
  const { url, alt } = SVGS.button.more;

  return (
    <button className={cx('btn-more')} aria-label='more menu button' aria-pressed={isActive} onClick={onClick}>
      <img src={url} alt={alt} width={24} height={24} />
    </button>
  );
};

export default MoreButton;
