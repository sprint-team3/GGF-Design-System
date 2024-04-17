import { useState } from 'react';

import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import { REGEX } from '@/constants/index';

import styles from './TextField.module.scss';

const cx = classNames.bind(styles);

type TextFieldProps = {
  name: string;
  label?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  color?: 'yellow' | 'purple';
};

export const TextField = ({ name, label, minLength, maxLength, color = 'purple', ...props }: TextFieldProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const contentValue = watch(name);
  const textLength = contentValue ? contentValue.replace(REGEX.textarea, '').length : 0;
  const isBelowMinLength = minLength && textLength < minLength;
  const isValidLength = minLength && textLength >= minLength;
  const isError = !!errors[name]?.message;

  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={cx('text-field')}>
      <label id={`text-field-${name}`} className={cx('text-field-label', { 'non-label': !label })}>
        {label}
      </label>
      <button
        className={cx('text-field-text-group', color, { error: isError }, { focused: isFocused })}
        aria-label={name}
        aria-labelledby={name}
        role='textbox'
        tabIndex={0}
        onClick={handleClick}
        onBlur={handleBlur}
      >
        <textarea
          className={cx('text-field-text-group-textarea')}
          {...register(name)}
          maxLength={maxLength}
          {...props}
        />
        {minLength && maxLength && (
          <div className={cx('text-field-text-group-footer')}>
            <span
              className={cx(
                'text-field-text-group-footer-current-num',
                { active: isValidLength },
                { error: isBelowMinLength },
              )}
            >
              {textLength}
            </span>
            <span className={cx('text-field-text-group-footer-total-num')}>/{maxLength}</span>
          </div>
        )}
      </button>
    </div>
  );
};
