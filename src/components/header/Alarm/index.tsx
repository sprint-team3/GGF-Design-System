import { RefObject } from 'react';

import classNames from 'classnames/bind';

import { SVGS } from '@/constants/index';

import styles from './Alarm.module.scss';

const cx = classNames.bind(styles);
const { full, empty } = SVGS.alarm;

type AlarmProps = {
  isAlarmExisted: boolean;
  isActivated: boolean;
  onClick: () => void;
  alarmRef?: RefObject<HTMLButtonElement>;
};

const Alarm = ({ isAlarmExisted, isActivated, onClick, alarmRef }: AlarmProps) => {
  const { url, alt } = isAlarmExisted ? full : empty;

  return (
    <button className={cx('frame-outer')} onClick={onClick} ref={alarmRef}>
      <div className={cx('dot', 'dot-top', { 'dot-activated': isActivated })}></div>
      <div className={cx('dot', 'dot-right', { 'dot-activated': isActivated })}></div>
      <div className={cx('dot', 'dot-bottom', { 'dot-activated': isActivated })}></div>
      <div className={cx('dot', 'dot-left', { 'dot-activated': isActivated })}></div>
      <div className={cx('frame-inner', { 'frame-inner-activated': isActivated })}>
        <img src={url} alt={alt} width={20} height={20} />
      </div>
    </button>
  );
};

export default Alarm;
