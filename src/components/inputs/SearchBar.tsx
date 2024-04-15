import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants/index';

import { SearchFilter } from '@/types/index';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const { url, alt } = SVGS.search;

type SearchBarType = {
  placeholder: string;
  onChange: (value: string) => void;
  maxLength?: number;
};

export const SearchBar = ({ placeholder, onChange, maxLength = 20 }: SearchBarType) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cx('searchbar')}>
      <input
        className={cx('searchbar-input')}
        type='text'
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => handleChange(event)}
      />
      <div className={cx('searchbar-search-icon')}>
        <img className={cx('img')} src={url} alt={alt} />
      </div>
    </div>
  );
};
