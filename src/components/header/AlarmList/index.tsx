import { RefObject } from 'react';

import classNames from 'classnames/bind';

import AlarmCard from '@/components/header/AlarmCard';
import EmptyAlarm from '@/components/header/EmptyAlarm';

import { NotificationResponse } from '@/types/index';

import styles from './AlarmList.module.scss';

const cx = classNames.bind(styles);

type AlarmListProps = {
  notifications: NotificationResponse[];
  totalCount: number;
  alarmListRef: RefObject<HTMLDivElement>;
  handleDelete: (id: number) => void;
  handleDeleteAll: () => void;
};

const AlarmList = ({ notifications, totalCount, alarmListRef, handleDelete, handleDeleteAll }: AlarmListProps) => {
  return (
    <div className={cx('alarm-list')} ref={alarmListRef}>
      <div className={cx('alarm-list-top')}>
        <div className={cx('alarm-list-count')}>
          <span className={cx('alarm')}>알림</span>
          <span className={cx('total-count')}>{totalCount}</span>
        </div>
        <button className={cx('delete-all')} onClick={handleDeleteAll}>
          전체 삭제
        </button>
      </div>
      <div className={cx('alarm-list-bottom')}>
        {notifications[0] ? (
          <ul className={cx('alarm-list-contents')}>
            {notifications.map(({ id, content, createdAt }) => (
              <li key={id}>
                <AlarmCard id={id} content={content} createdAt={createdAt} onClick={handleDelete} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyAlarm />
        )}
      </div>
    </div>
  );
};

export default AlarmList;
