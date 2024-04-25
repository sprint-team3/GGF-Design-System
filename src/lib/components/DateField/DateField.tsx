import { useState } from 'react';

import classNames from 'classnames/bind';
import { format } from 'date-fns';
import { DayPicker, DateFormatter } from 'react-day-picker';
import { FieldValues, FormState, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { SVGS } from '@/constants';
import { getAfterDays, getDayPickerFormatDate, getYesterday } from '@/utils';

import useTogglePopup from '@/hooks/useTogglePopup';

import styles from './DateField.module.scss';
import dayPickerStyle from './DayPicker.module.scss';

const cx = classNames.bind(styles);

const { url, alt } = SVGS.calendar.active;

type FormMethod = {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

type DateFieldProps = {
  formMethod: FormMethod;
  label: string;
  name: string;
  days: number;
  color?: 'purple' | 'yellow';
};

const DateField = ({ formMethod, label, name, days, color = 'purple' }: DateFieldProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = formMethod;
  const { isOpen, popupRef, buttonRef, togglePopup } = useTogglePopup();
  const [selected, setSelected] = useState<Date | undefined>();

  const isError = !!errors[name]?.message;
  const formattedDate = selected ? getDayPickerFormatDate(selected) : '';

  const yesterday = getYesterday();
  const afterDays = getAfterDays(days);

  const disabledDays = [
    { from: new Date(1990, 1, 20), to: yesterday },
    { from: afterDays, to: new Date(2100, 1, 20) },
  ];

  const formatWeekdayName: DateFormatter = (date, options) => format(date, 'EEE', { locale: options?.locale });

  const handleSelectDate = (date: Date | undefined) => {
    setSelected(date);
    if (date) {
      const formattedDateString = getDayPickerFormatDate(date);
      setValue(name, formattedDateString);
    } else {
      setSelected(undefined);
      setValue(name, '');
    }
    togglePopup();
  };

  return (
    <div className={cx('datefield')}>
      <span className={cx('datefield-label')}>{label}</span>
      <button type='button' className={cx('datefield-group')} ref={buttonRef} onClick={togglePopup}>
        <input
          className={cx('datefield-group-input', color, { error: isError })}
          placeholder='YYYY-MM-DD'
          {...(register(name),
          {
            value: formattedDate || '',
            readOnly: true,
          })}
        />
        <div className={cx('datefield-group-calendar-icon')}>
          <img className={cx('datefield-group-calendar-icon-img')} src={url} alt={alt} />
        </div>
      </button>

      <div className={cx('datefield-day-picker', { opened: isOpen })} ref={popupRef}>
        <DayPicker
          classNames={dayPickerStyle}
          selected={selected}
          onSelect={handleSelectDate}
          mode='single'
          showOutsideDays
          weekStartsOn={1}
          disabled={disabledDays}
          formatters={{ formatWeekdayName }}
        />
      </div>
    </div>
  );
};

export default DateField;
