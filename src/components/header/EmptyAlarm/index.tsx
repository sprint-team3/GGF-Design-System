import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './EmptyAlarm.module.scss';

const cx = classNames.bind(styles);

const { url, alt } = SVGS.alarm.off;

type EmptyAlarmProps = {
  emptyAlarmText: string;
};

const EmptyAlarm = ({ emptyAlarmText }: EmptyAlarmProps) => {
  return (
    <div className={cx('empty-alarm')}>
      <img src={url} alt={alt} width={24} height={24} />
      <span className={cx('text')}>{emptyAlarmText}</span>
    </div>
  );
};

export default EmptyAlarm;
