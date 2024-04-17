import { useState } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './StarRating.module.scss';

const cx = classNames.bind(styles);
const { star } = SVGS;

type StarRatingProps = {
  size?: 'small' | 'medium' | 'large';
  rating?: number;
  readonly?: boolean;
  onChange?: (rating: number) => void;
};

const StarRating = ({ size = 'medium', rating = 0, readonly = false, onChange }: StarRatingProps) => {
  const MAX_RATING = 5;
  const OFFSET = 1;

  const [filledStarId, setFilledStarId] = useState(rating);

  const handleStarClick = (starId: number) => {
    if (!onChange || readonly) return;
    const newRating = starId + OFFSET;

    setFilledStarId(newRating);
    onChange(newRating);
  };

  return (
    <ul className={cx('star-rating')} aria-label={`${rating} out of 5`}>
      {Array.from({ length: MAX_RATING }, (_, index) => {
        const filled = readonly ? index < rating : index < filledStarId;
        const { url, alt } = filled ? star.filled : star.empty;

        return (
          <li key={`key-star-${index}`}>
            {readonly ? (
              <div className={cx(`star-size-${size}`)}>
                <img className={cx('star-icon')} src={url} alt={alt} />
              </div>
            ) : (
              <button type='button' onClick={() => handleStarClick(index)} className={cx(`star-size-${size}`)}>
                <img className={cx('star-icon')} src={url} alt={alt} />
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default StarRating;
