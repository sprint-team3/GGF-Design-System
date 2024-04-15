import classNames from 'classnames/bind';

import { SVGS } from '@/constants/index';

import styles from './EmptyAlarm.module.scss';

const cx = classNames.bind(styles);

const { url, alt } = SVGS.alarm.off;

const EmptyAlarm = () => {
  return (
    <div className={cx('empty-alarm')}>
      <img src={url} alt={alt} width={24} height={24} />
      <span className={cx('text')}>알림이 없습니다</span>
    </div>
  );
};

export default EmptyAlarm;
