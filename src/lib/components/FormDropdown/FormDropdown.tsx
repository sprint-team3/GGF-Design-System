import { useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import { SVGS } from '@/constants';

import useTogglePopup from '@/hooks/useTogglePopup';

import styles from './FormDropdown.module.scss';

const cx = classNames.bind(styles);

const { url: defaultUrl, alt: defaultAlt } = SVGS.arrow.down.default;
const { url: activeUrl, alt: activeAlt } = SVGS.arrow.down.active;

type FormDropdownProps = {
  name: string;
  options: { title: string; value: number | string }[];
  label?: string;
  isSmall?: boolean;
  isDisabled?: boolean;
  color?: 'purple' | 'yellow';
};

const FormDropdown = ({
  name,
  label = '',
  options,
  isSmall = false,
  isDisabled = false,
  color = 'purple',
}: FormDropdownProps) => {
  const { register, setValue } = useFormContext();
  const { isOpen, popupRef, buttonRef, togglePopup } = useTogglePopup();
  const [currentOptionTitle, setCurrentOptionTitle] = useState(options[0]?.title);

  const handleOptionChange = (title: string, value: number | string) => {
    setValue(name, value);
    setCurrentOptionTitle(title);
    togglePopup();
  };

  return (
    <div className={cx('dropdown')} ref={popupRef}>
      <label htmlFor={`dropdown-${name}`} className={cx('label')}>
        {label}
      </label>
      <div className={cx('select-group')}>
        <select
          className={cx('select-group-selection')}
          {...register(name, {
            value: options[0]?.value,
          })}
        >
          {options.map((option, index) => (
            <option key={`dropdown-${index}`} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>

        <div className={cx('select-group-input-group')}>
          <input
            id={`dropdown-${name}`}
            className={cx('select-group-input-group-input', color, { sm: isSmall }, { opened: isOpen })}
            type='text'
            value={currentOptionTitle}
            disabled={isDisabled}
            onClick={togglePopup}
            readOnly
          />
          <button
            className={cx('select-group-input-group-arrow-btn', { rotate: isOpen })}
            ref={buttonRef}
            type='button'
            disabled={isDisabled}
            onClick={togglePopup}
          >
            <img
              className={cx('select-group-input-group-arrow-btn-img')}
              src={isOpen ? activeUrl : defaultUrl}
              alt={isOpen ? activeAlt : defaultAlt}
            />
          </button>
        </div>

        <div className={cx('select-group-container', { sm: isSmall }, { show: isOpen })}>
          {isOpen && (
            <ul className={cx('select-group-container-list')}>
              {options.map((option, index) => (
                <li className={cx('select-group-container-list-item')} key={`dropdown-item-${index}`}>
                  <button
                    className={cx('select-group-container-list-item-btn', { sm: isSmall })}
                    onClick={() => handleOptionChange(option.title, option.value)}
                  >
                    <label className={cx('select-group-container-list-item-btn-label')}>{option.title}</label>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormDropdown;
