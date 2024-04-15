import { Fragment } from 'react';

import classNames from 'classnames/bind';

import Avatar from '@/components/Avatar';
import StarRating from '@/components/StarRating';

import styles from './ReviewCard.module.scss';

const cx = classNames.bind(styles);

type ReviewCardProps = {
  profileImageUrl: string | null;
  nickname: string;
  rating: number;
  content: string;
  createdAt: string | number;
};

const ReviewCard = ({ profileImageUrl, nickname, rating, createdAt, content }: ReviewCardProps) => {
  return (
    <article className={cx('review-card')}>
      <div className={cx('review-card-profile')}>
        <Avatar size='small' profileImageUrl={profileImageUrl} />
        <div className={cx('review-card-info')}>
          <h1 className={cx('review-card-info-reviewer')}>{nickname}</h1>
          <div className={cx('review-card-info-rating')}>
            <StarRating size='small' rating={rating} readonly />
            <span className={cx('review-card-info-date')}>{createdAt}</span>
          </div>
        </div>
      </div>
      <div className={cx('review-card-comment')}>
        {content.split('\n').map((comment, index) => (
          <Fragment key={`key-content-${index}`}>
            {comment}
            <br />
          </Fragment>
        ))}
      </div>
    </article>
  );
};

export default ReviewCard;
