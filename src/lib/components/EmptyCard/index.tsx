import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './EmptyCard.module.scss';

const cx = classNames.bind(styles);

type EmptyCardProps = {
  text?: string;
  isSmall?: boolean;
};

const { url, alt } = SVGS.empty;

const EmptyCard = ({ text, isSmall }: EmptyCardProps) => {
  return (
    <div className={cx('card-empty', { small: isSmall })}>
      <img src={url} alt={alt} width={32} height={32} />
      <div>{text ?? 'No Data'}</div>
    </div>
  );
};

export default EmptyCard;
