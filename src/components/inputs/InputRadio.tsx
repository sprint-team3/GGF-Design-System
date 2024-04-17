import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';

import styles from './InputRadio.module.scss';

const cx = classNames.bind(styles);

type InputRadioProps = {
  label: string;
  name: string;
  radioList: { id: string; value: number; label: string }[];
  defaultCheckIndex?: number;
  color?: 'yellow' | 'purple';
  onClick?: (value: number) => void;
};

export const InputRadio = ({
  label,
  name,
  radioList,
  defaultCheckIndex = 0,
  color = 'purple',
  onClick,
}: InputRadioProps) => {
  const { register } = useFormContext();

  return (
    <div className={cx('input-radio')}>
      <label className={cx('input-radio-label')}>{label}</label>
      <div className={cx('input-radio-group')}>
        {radioList.map((option, index) => (
          <button
            className={cx('input-radio-group-options')}
            key={option.id}
            type='button'
            onClick={() => onClick?.(option.value)}
          >
            <input
              className={cx(color)}
              type='radio'
              id={option.id}
              value={option.value}
              defaultChecked={index === defaultCheckIndex}
              {...register(name)}
            />
            <label className={cx('label')} htmlFor={option.id}>
              {option.label}
            </label>
          </button>
        ))}
      </div>
    </div>
  );
};
