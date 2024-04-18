import { ChangeEvent } from 'react';

import classNames from 'classnames/bind';

import searchIcon from '@/assets/ic-search.svg';
import { SVGS } from '@/constants';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const { url, alt } = SVGS.search;

type SearchBarType = {
  placeholder: string;
  onChange: (value: string) => void;
  color?: 'yellow' | 'purple';
  maxLength?: number;
};

export const SearchBar = ({ placeholder, onChange, color = 'purple', maxLength = 20 }: SearchBarType) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cx('searchbar')}>
      <input
        className={cx('searchbar-input', color)}
        type='text'
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => handleChange(event)}
      />
      <div className={cx('searchbar-search-icon')}>
        <img className={cx('searchbar-search-icon-img')} src={url} alt={alt} />
      </div>
    </div>
  );
};
