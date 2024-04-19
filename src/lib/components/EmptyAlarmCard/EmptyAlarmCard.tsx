import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import styles from './EmptyAlarmCard.module.scss';

const cx = classNames.bind(styles);

const { url, alt } = SVGS.alarm.off;

type EmptyAlarmCardProps = {
  emptyAlarmText: string;
};

const EmptyAlarmCard = ({ emptyAlarmText }: EmptyAlarmCardProps) => {
  return (
    <div className={cx('empty-alarm')}>
      <img src={url} alt={alt} width={24} height={24} />
      <span className={cx('text')}>{emptyAlarmText}</span>
    </div>
  );
};

export default EmptyAlarmCard;
