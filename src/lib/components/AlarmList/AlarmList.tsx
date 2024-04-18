import { RefObject } from 'react';

import classNames from 'classnames/bind';

import AlarmCard from '../AlarmCard';
import EmptyAlarmCard from '../EmptyAlarmCard';

import styles from './AlarmList.module.scss';

const cx = classNames.bind(styles);

type Notification = {
  id: number;
  content: string;
  createdAt: string;
};

type AlarmListProps = {
  alarmText: string;
  deleteAllText: string;
  notifications: Notification[];
  totalCount: number;
  handleDelete: (id: number) => void;
  handleDeleteAll: () => void;
  emptyAlarmText: string;
  alarmListRef?: RefObject<HTMLDivElement>;
};

const AlarmList = ({
  alarmText,
  deleteAllText,
  notifications,
  totalCount,
  handleDelete,
  handleDeleteAll,
  emptyAlarmText,
  alarmListRef,
}: AlarmListProps) => {
  return (
    <div className={cx('alarm-list')} ref={alarmListRef}>
      <div className={cx('alarm-list-top')}>
        <div className={cx('alarm-list-count')}>
          <span className={cx('alarm')}>{alarmText}</span>
          <span className={cx('total-count')}>{totalCount}</span>
        </div>
        <button className={cx('delete-all')} onClick={handleDeleteAll}>
          {deleteAllText}
        </button>
      </div>
      <div className={cx('alarm-list-bottom')}>
        {notifications[0] ? (
          <ul className={cx('alarm-list-contents')}>
            {notifications.map(({ id, content, createdAt }) => (
              <li className={cx('alarm-list-content')} key={id}>
                <AlarmCard id={id} content={content} createdAt={createdAt} onClick={handleDelete} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyAlarmCard emptyAlarmText={emptyAlarmText} />
        )}
      </div>
    </div>
  );
};

export default AlarmList;
