import classNames from 'classnames/bind';

import { SVGS } from '@/constants';
import { toFixedOneDecimal } from '@/utils';

import StarRating from '@/components/StarRating';
import Tag from '@/components/Tag/Tag';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);
const { url, alt } = SVGS.calendar.default;

export type CardProps = {
  path: string;
  title: string;
  rating: number;
  reviewCount: number;
  createdAt: string | number;
  tagContent: string | number;
  tagVariant?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

const Card = ({ path, title, rating, reviewCount, createdAt, tagContent, tagVariant = 'default' }: CardProps) => {
  return (
    <article className={cx('card')}>
      <a href={path} className={cx('card-inner')}>
        <div className={cx('card-content')}>
          <header className={cx('card-content-header')}>
            <Tag variant={tagVariant}>{tagContent}</Tag>
          </header>
          <h2 className={cx('card-content-title')}>{title}</h2>
        </div>
        <footer className={cx('card-footer')}>
          <div className={cx('card-footer-review')}>
            <StarRating size='small' rating={rating} readonly />
            <span className={cx('card-footer-review-rating')}>
              {toFixedOneDecimal(rating)} ({reviewCount})
            </span>
          </div>
          <div className={cx('card-footer-calendar')}>
            <img src={url} alt={alt} width={20} height={20} />
            <span className={cx('card-footer-calendar-date')}>{createdAt}</span>
          </div>
        </footer>
      </a>
    </article>
  );
};

export default Card;
