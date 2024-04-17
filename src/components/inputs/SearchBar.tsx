import { ChangeEvent } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import searchIcon from '../../assets/ic-search.svg';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const { alt } = SVGS.search;

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
        <img className={cx('searchbar-search-icon-img')} src={searchIcon} alt={alt} />
      </div>
    </div>
  );
};
