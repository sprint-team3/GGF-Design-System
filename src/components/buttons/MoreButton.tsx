import classNames from 'classnames/bind';

import { SVGS } from '@/constants/images';

import styles from './MoreButton.module.scss';

const cx = classNames.bind(styles);

type MoreButtonProps = {
  onClick?: () => void;
  isActive?: boolean;
};

export const MoreButton = ({ onClick, isActive = false }: MoreButtonProps) => {
  const { url, alt } = SVGS.button.more;

  return (
    <button className={cx('btn-more')} aria-label='메뉴 더보기 버튼' aria-pressed={isActive} onClick={onClick}>
      <img src={url} alt={alt} width={24} height={24} />
    </button>
  );
};
